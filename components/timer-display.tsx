interface TimerProps {
  elapsedTime: string
  active: boolean
  bgColor: string
  isRunning: boolean
}

const TimerDisplay = ({
  elapsedTime,
  active,
  bgColor,
  isRunning,
}: TimerProps) => {
  const isPaused = !isRunning && elapsedTime !== '00:00'

  return (
    <div
      className={`flex flex-col h-screen ${bgColor} transition-colors duration-1000`}
    >
      <main className="flex-grow flex items-center justify-center">
        <div className="flex items-center gap-6">
          <h1
            title="Elapsed Time"
            className={`text-8xl font-bold text-white transition-opacity drop-shadow-md duration-300 ${
              active ? 'opacity-100' : 'opacity-70'
            }`}
          >
            {elapsedTime}
          </h1>
          {isPaused && (
            <span
              className={`text-4xl font-semibold text-white transition-opacity drop-shadow-md duration-300 ${
                active ? 'opacity-100' : 'opacity-70'
              }`}
            >
              PAUSED
            </span>
          )}
        </div>
      </main>
    </div>
  )
}

export default TimerDisplay
