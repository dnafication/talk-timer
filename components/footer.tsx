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
        <h2 className="text-xl" title="Title of the Talk">
          {talkTitle}
        </h2>
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
                Title
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
            <div className="text-xs text-center">
              <p>
                Built with{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener"
                  className="underline hover:text-blue-300"
                >
                  Next.js
                </a>
                ,{' '}
                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener"
                  className="underline hover:text-blue-300"
                >
                  React
                </a>
                ,{' '}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener"
                  className="underline hover:text-blue-300"
                >
                  Tailwind
                </a>
                , and{' '}
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener"
                  className="underline hover:text-blue-300"
                >
                  shadcn/ui
                </a>
              </p>
              <a
                href="https://github.com/dnafication/talk-timer"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center space-x-1 mt-2 text-blue-700 hover:text-blue-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  )
}

export default Footer
