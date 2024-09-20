'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Settings, Play, Pause, TimerReset } from 'lucide-react'

export function LightningTalkTimerComponent() {
  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [talkTitle, setTalkTitle] = useState('My Lightning Talk')
  const [yellowThreshold, setYellowThreshold] = useState(90) // 1 and half minute
  const [redThreshold, setRedThreshold] = useState(120) // 2 minutes

  const getBackgroundColor = useCallback(() => {
    if (elapsedTime < yellowThreshold) {
      return 'bg-gradient-to-br from-green-400 to-green-600'
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

  return (
    <div
      className={`min-h-screen flex flex-col ${getBackgroundColor()} transition-colors duration-1000`}
    >
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-8xl font-bold text-white">
          {formatTime(elapsedTime)}
        </h1>
      </main>

      <footer className="bg-black bg-opacity-60 text-white px-5 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button onClick={toggleTimer} variant="outline">
            {isRunning ? (
              <Pause className="h-4 w-4" strokeWidth={3} />
            ) : (
              <Play className="h-4 w-4" strokeWidth={3} />
            )}
          </Button>
          <Button onClick={resetTimer} variant="outline">
            <TimerReset className="h-4 w-4" strokeWidth={3} />
          </Button>
        </div>
        <div className="text-center flex-grow">
          <h2 className="text-xl">{talkTitle}</h2>
          <p>{formatTime(elapsedTime)}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" strokeWidth={3} />
            </Button>
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>Timer Settings</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="talkTitle" className="text-right">
                  Title of Talk
                </Label>
                <Input
                  id="talkTitle"
                  value={talkTitle}
                  onChange={(e) => setTalkTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="yellowThreshold"
                  className="text-right text-yellow-600"
                >
                  Yellow at (seconds)
                </Label>
                <Input
                  id="yellowThreshold"
                  type="number"
                  value={yellowThreshold}
                  onChange={(e) => setYellowThreshold(Number(e.target.value))}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="redThreshold"
                  className="text-right text-red-500"
                >
                  Red at (seconds)
                </Label>
                <Input
                  id="redThreshold"
                  type="number"
                  value={redThreshold}
                  onChange={(e) => setRedThreshold(Number(e.target.value))}
                  className="col-span-3"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </footer>
    </div>
  )
}
