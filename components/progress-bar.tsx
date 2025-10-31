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
  // Each edge of the screen represents 25% of total progress
  const SEGMENT_PERCENTAGE = 25

  const progress = totalTime > 0 ? (elapsedTime / totalTime) * 100 : 0
  const clampedProgress = Math.min(progress, 100)

  // Map color classes to solid colors for the progress bar
  const getProgressColor = () => {
    if (colorClass.startsWith('bg-gradient-to-br from-green')) {
      return 'bg-green-500'
    } else if (colorClass.startsWith('bg-gradient-to-br from-yellow')) {
      return 'bg-yellow-500'
    } else if (colorClass.startsWith('bg-gradient-to-br from-red')) {
      return 'bg-red-500'
    }
    return 'bg-green-500' // default
  }

  // Calculate progress for a specific segment (0-3 for top, right, bottom, left)
  const getSegmentProgress = (segmentIndex: number) => {
    const segmentStart = segmentIndex * SEGMENT_PERCENTAGE
    return Math.min(
      Math.max(clampedProgress - segmentStart, 0),
      SEGMENT_PERCENTAGE,
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top bar */}
      <div className="absolute top-0 left-0 h-[3px] bg-white bg-opacity-20 w-full">
        <div
          className={`h-full ${getProgressColor()} transition-all duration-300`}
          style={{ width: `${getSegmentProgress(0)}%` }}
        />
      </div>

      {/* Right bar */}
      <div className="absolute top-0 right-0 w-[3px] bg-white bg-opacity-20 h-full">
        <div
          className={`w-full ${getProgressColor()} transition-all duration-300`}
          style={{ height: `${getSegmentProgress(1)}%` }}
        />
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 right-0 h-[3px] bg-white bg-opacity-20 w-full">
        <div
          className={`h-full ${getProgressColor()} transition-all duration-300 ml-auto`}
          style={{ width: `${getSegmentProgress(2)}%` }}
        />
      </div>

      {/* Left bar */}
      <div className="absolute bottom-0 left-0 w-[3px] bg-white bg-opacity-20 h-full">
        <div
          className={`w-full ${getProgressColor()} transition-all duration-300 mt-auto`}
          style={{ height: `${getSegmentProgress(3)}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
