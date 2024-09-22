import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pause, Play, Settings, TimerReset } from 'lucide-react'

type FooterProps = {
  active: boolean
  isRunning: boolean
  talkTitle: string
  yellowThreshold: number
  redThreshold: number
  toggleTimer: () => void
  resetTimer: () => void
  setTalkTitle: (title: string) => void
  setYellowThreshold: (threshold: number) => void
  setRedThreshold: (threshold: number) => void
}

const Footer = ({
  active,
  isRunning,
  talkTitle,
  yellowThreshold,
  redThreshold,
  toggleTimer,
  resetTimer,
  setTalkTitle,
  setYellowThreshold,
  setRedThreshold
}: FooterProps) => {
  return (
    <footer
      className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white px-5 py-4 flex justify-between items-center transition-opacity duration-300 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center space-x-4">
        <Button
          onClick={toggleTimer}
          variant="outline"
          title={isRunning ? 'Pause Timer' : 'Start Timer'}
        >
          {isRunning ? (
            <Pause className="h-4 w-4" strokeWidth={3} />
          ) : (
            <Play className="h-4 w-4" strokeWidth={3} />
          )}
        </Button>
        <Button onClick={resetTimer} variant="outline" title="Reset Timer">
          <TimerReset className="h-4 w-4" strokeWidth={3} />
        </Button>
      </div>
      <div className="text-center flex-grow">
        <h2 className="text-xl">{talkTitle}</h2>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" title="Settings">
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
              <Label htmlFor="redThreshold" className="text-right text-red-500">
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
  )
}

export default Footer
