interface TimerProps {
  displayTime: string
  displayLabel: string
  active: boolean
  bgColor: string
  isRunning: boolean
  isOvertime?: boolean
}

const TimerDisplay = ({
  displayTime,
  displayLabel,
  active,
  bgColor,
  isRunning,
  isOvertime = false,
}: TimerProps) => {
  const isPaused = !isRunning && displayTime !== '00:00'

  return (
    <div
      className={`flex flex-col h-screen ${bgColor} transition-colors duration-1000`}
    >
      <main className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span
            className={`text-2xl font-medium text-white transition-opacity drop-shadow-md duration-300 uppercase tracking-widest ${
              active ? 'opacity-80' : 'opacity-50'
            }`}
          >
            {displayLabel}
          </span>
          <div className="flex items-center gap-6">
            <h1
              title={`${displayLabel} Time`}
              className={`text-8xl font-bold text-white transition-opacity drop-shadow-md duration-300 ${
                active ? 'opacity-100' : 'opacity-70'
              } ${isOvertime ? 'animate-pulse' : ''}`}
            >
              {isOvertime ? `-${displayTime}` : displayTime}
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
        </div>
      </main>
    </div>
  )
}

export default TimerDisplay
