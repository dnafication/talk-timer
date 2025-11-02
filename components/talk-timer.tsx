'use client'

import { useCallback, useEffect, useState } from 'react'

import Footer from './footer'
import ProgressBar from './progress-bar'
import TimerDisplay from './timer-display'

export function TalkTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [talkTitle, setTalkTitle] = useState('My Lightning Talk ⚡')
  const [yellowThreshold, setYellowThreshold] = useState(90) // 1 and half minute
  const [redThreshold, setRedThreshold] = useState(120) // 2 minutes
  const [active, setActive] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const getBackgroundColor = useCallback(() => {
    if (elapsedTime < yellowThreshold) {
      return 'bg-gradient-to-br from-green-300 to-green-600'
    } else if (elapsedTime < redThreshold) {
      return 'bg-gradient-to-br from-yellow-400 to-yellow-600'
    } else {
      return 'bg-gradient-to-br from-red-400 to-red-600'
    }
  }, [elapsedTime, yellowThreshold, redThreshold])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

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

  useEffect(() => {
    if (elapsedTime > 0) {
      document.title = `Elapsed - ${formatTime(elapsedTime)}`
    }
  })

  const toggleTimer = () => setIsRunning(!isRunning)

  const resetTimer = () => {
    setIsRunning(false)
    setElapsedTime(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
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
        toggleFullscreen()
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleFullscreen])

  return (
    <div className="relative h-screen">
      <TimerDisplay
        elapsedTime={formatTime(elapsedTime)}
        active={active}
        bgColor={getBackgroundColor()}
      />
      {elapsedTime > 0 && (
        <ProgressBar elapsedTime={elapsedTime} totalTime={redThreshold} />
      )}
      <Footer
        active={active}
        isRunning={isRunning}
        talkTitle={talkTitle}
        yellowThreshold={yellowThreshold}
        redThreshold={redThreshold}
        isFullscreen={isFullscreen}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        toggleFullscreen={toggleFullscreen}
        setTalkTitle={setTalkTitle}
        setYellowThreshold={setYellowThreshold}
        setRedThreshold={setRedThreshold}
      />
    </div>
  )
}
