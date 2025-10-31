interface ProgressBarProps {
  elapsedTime: number
  totalTime: number
  colorClass: string
}

const ProgressBar = ({
  elapsedTime,
  totalTime,
  colorClass,
}: ProgressBarProps) => {
  const progress = totalTime > 0 ? (elapsedTime / totalTime) * 100 : 0
  const clampedProgress = Math.min(progress, 100)

  // Map color classes to solid colors for the progress bar
  const getProgressColor = () => {
    if (colorClass.includes('green')) {
      return 'bg-green-500'
    } else if (colorClass.includes('yellow')) {
      return 'bg-yellow-500'
    } else {
      return 'bg-red-500'
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top bar */}
      <div className="absolute top-0 left-0 h-[3px] bg-white bg-opacity-20 w-full">
        <div
          className={`h-full ${getProgressColor()} transition-all duration-300`}
          style={{ width: `${Math.min(clampedProgress, 25)}%` }}
        />
      </div>

      {/* Right bar */}
      <div className="absolute top-0 right-0 w-[3px] bg-white bg-opacity-20 h-full">
        <div
          className={`w-full ${getProgressColor()} transition-all duration-300`}
          style={{
            height: `${Math.min(Math.max(clampedProgress - 25, 0), 25)}%`,
          }}
        />
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 right-0 h-[3px] bg-white bg-opacity-20 w-full">
        <div
          className={`h-full ${getProgressColor()} transition-all duration-300 ml-auto`}
          style={{
            width: `${Math.min(Math.max(clampedProgress - 50, 0), 25)}%`,
          }}
        />
      </div>

      {/* Left bar */}
      <div className="absolute bottom-0 left-0 w-[3px] bg-white bg-opacity-20 h-full">
        <div
          className={`w-full ${getProgressColor()} transition-all duration-300 mt-auto`}
          style={{
            height: `${Math.min(Math.max(clampedProgress - 75, 0), 25)}%`,
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
