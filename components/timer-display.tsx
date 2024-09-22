interface TimerProps {
  elapsedTime: string
  active: boolean
  bgColor: string
}

const TimerDisplay = ({ elapsedTime, active, bgColor }: TimerProps) => {
  return (
    <div
      className={`flex flex-col h-screen ${bgColor} transition-colors duration-1000`}
    >
      <main className="flex-grow flex items-center justify-center">
        <h1
          title="Elapsed Time"
          className={`text-8xl font-bold text-white transition-opacity drop-shadow-md duration-300 ${
            active ? 'opacity-100' : 'opacity-70'
          }`}
        >
          {elapsedTime}
        </h1>
      </main>
    </div>
  )
}

export default TimerDisplay
