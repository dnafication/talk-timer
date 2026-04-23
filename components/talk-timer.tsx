'use client'

import { useCallback, useEffect, useState } from 'react'

import Footer from './footer'
import { ProgressBar } from './progress-bar'
import TimerDisplay from './timer-display'

export type TimerMode = 'stopwatch' | 'scheduled'

export function TalkTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [talkTitle, setTalkTitle] = useState('My Lightning Talk ⚡')
  const [yellowThreshold, setYellowThreshold] = useState(90) // 1 and half minute
  const [redThreshold, setRedThreshold] = useState(120) // 2 minutes
  const [active, setActive] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showShortcutsDialog, setShowShortcutsDialog] = useState(false)

  // Scheduled mode state
  const [timerMode, setTimerMode] = useState<TimerMode>('stopwatch')
  const [scheduledStartTime, setScheduledStartTime] = useState('')
  const [scheduledEndTime, setScheduledEndTime] = useState('')
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null)

  const getBackgroundColor = useCallback(() => {
    if (timerMode === 'scheduled') {
      if (remainingSeconds === null) {
        return 'bg-gradient-to-br from-green-300 to-green-600'
      }
      if (remainingSeconds <= 60) {
        return 'bg-gradient-to-br from-red-400 to-red-600'
      }
      if (remainingSeconds <= 300) {
        return 'bg-gradient-to-br from-yellow-400 to-yellow-600'
      }
      return 'bg-gradient-to-br from-green-300 to-green-600'
    }

    if (elapsedTime < yellowThreshold) {
      return 'bg-gradient-to-br from-green-300 to-green-600'
    } else if (elapsedTime < redThreshold) {
      return 'bg-gradient-to-br from-yellow-400 to-yellow-600'
    } else {
      return 'bg-gradient-to-br from-red-400 to-red-600'
    }
  }, [timerMode, remainingSeconds, elapsedTime, yellowThreshold, redThreshold])

  // Stopwatch mode interval
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timerMode === 'stopwatch' && isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, timerMode])

  // Scheduled mode interval - updates remaining time based on wall clock
  useEffect(() => {
    if (timerMode !== 'scheduled' || !scheduledEndTime) {
      setRemainingSeconds(null)
      return
    }

    const calcRemaining = () => {
      const now = new Date()
      const [endH, endM] = scheduledEndTime.split(':').map(Number)
      const endDate = new Date()
      endDate.setHours(endH, endM, 0, 0)

      // If end time appears to be before now by more than 12 hours,
      // assume it's for the next day
      if (endDate.getTime() - now.getTime() < -12 * 60 * 60 * 1000) {
        endDate.setDate(endDate.getDate() + 1)
      }

      const diffSec = Math.floor((endDate.getTime() - now.getTime()) / 1000)
      setRemainingSeconds(diffSec)
    }

    calcRemaining()
    const interval = setInterval(calcRemaining, 1000)
    return () => clearInterval(interval)
  }, [timerMode, scheduledEndTime])

  const hideAfter = 3000

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const handleMouseMove = () => {
      setActive(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setActive(false)
      }, hideAfter)
    }

    window.addEventListener('mousemove', handleMouseMove)
    handleMouseMove() // Initial call to start the timeout

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeout)
    }
  }, [])

  // Document title
  useEffect(() => {
    if (timerMode === 'scheduled' && remainingSeconds !== null) {
      if (remainingSeconds >= 0) {
        document.title = `Remaining - ${formatTime(remainingSeconds)}`
      } else {
        document.title = `Overtime - ${formatTime(Math.abs(remainingSeconds))}`
      }
    } else if (elapsedTime > 0) {
      const pausedText = !isRunning ? ' - PAUSED' : ''
      document.title = `Elapsed - ${formatTime(elapsedTime)}${pausedText}`
    } else {
      document.title = 'Talk Timer'
    }
  })

  const toggleTimer = useCallback(() => setIsRunning(!isRunning), [isRunning])

  const resetTimer = useCallback(() => {
    setIsRunning(false)
    setElapsedTime(0)
  }, [])

  const formatTime = (seconds: number) => {
    const absSeconds = Math.abs(seconds)
    const hrs = Math.floor(absSeconds / 3600)
    const mins = Math.floor((absSeconds % 3600) / 60)
    const secs = absSeconds % 60
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err)
      })
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input field
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target instanceof HTMLElement && e.target.isContentEditable)
      ) {
        return
      }

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFullscreen()
      } else if (e.key === 'p' || e.key === 'P' || e.key === ' ') {
        e.preventDefault() // Prevent space from scrolling the page
        if (timerMode === 'stopwatch') {
          toggleTimer()
        }
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault()
        if (timerMode === 'stopwatch') {
          resetTimer()
        }
      } else if (e.key === '?') {
        e.preventDefault()
        setShowShortcutsDialog(true)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleFullscreen, toggleTimer, resetTimer, timerMode])

  // Compute display values based on mode
  const isScheduledMode = timerMode === 'scheduled'
  const hasScheduledTimes = scheduledEndTime !== ''

  let displayTime: string
  let displayLabel: string
  let isOvertime = false

  if (isScheduledMode && hasScheduledTimes && remainingSeconds !== null) {
    if (remainingSeconds < 0) {
      displayTime = formatTime(Math.abs(remainingSeconds))
      displayLabel = 'Overtime'
      isOvertime = true
    } else {
      displayTime = formatTime(remainingSeconds)
      displayLabel = 'Remaining'
    }
  } else {
    displayTime = formatTime(elapsedTime)
    displayLabel = 'Elapsed'
  }

  // Progress bar values
  let progressElapsed = elapsedTime
  let progressTotal = redThreshold
  if (isScheduledMode && hasScheduledTimes && scheduledStartTime) {
    const [startH, startM] = scheduledStartTime.split(':').map(Number)
    const [endH, endM] = scheduledEndTime.split(':').map(Number)
    const totalDuration =
      (endH * 60 + endM - (startH * 60 + startM)) * 60 +
      (endH * 60 + endM < startH * 60 + startM ? 24 * 3600 : 0)
    const elapsed =
      remainingSeconds !== null ? totalDuration - remainingSeconds : 0
    progressElapsed = Math.max(0, elapsed)
    progressTotal = totalDuration
  }

  const showProgressBar = isScheduledMode
    ? hasScheduledTimes && remainingSeconds !== null
    : elapsedTime > 0

  return (
    <div className="relative h-screen">
      <TimerDisplay
        displayTime={displayTime}
        displayLabel={displayLabel}
        active={active}
        bgColor={getBackgroundColor()}
        isRunning={isScheduledMode || isRunning}
        isOvertime={isOvertime}
      />
      {showProgressBar && (
        <ProgressBar elapsedTime={progressElapsed} totalTime={progressTotal} />
      )}
      <Footer
        active={active}
        isRunning={isRunning}
        talkTitle={talkTitle}
        yellowThreshold={yellowThreshold}
        redThreshold={redThreshold}
        isFullscreen={isFullscreen}
        showShortcutsDialog={showShortcutsDialog}
        timerMode={timerMode}
        scheduledStartTime={scheduledStartTime}
        scheduledEndTime={scheduledEndTime}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        toggleFullscreen={toggleFullscreen}
        setTalkTitle={setTalkTitle}
        setYellowThreshold={setYellowThreshold}
        setRedThreshold={setRedThreshold}
        setShowShortcutsDialog={setShowShortcutsDialog}
        setTimerMode={setTimerMode}
        setScheduledStartTime={setScheduledStartTime}
        setScheduledEndTime={setScheduledEndTime}
      />
    </div>
  )
}
