interface ProgressBarProps {
  elapsedTime: number
  totalTime: number
}

const ProgressBar = ({ elapsedTime, totalTime }: ProgressBarProps) => {
  const progress = totalTime > 0 ? (elapsedTime / totalTime) * 100 : 0
  const clampedProgress = Math.min(progress, 100)

  return (
    <div className="fixed top-0 left-0 right-0 pointer-events-none z-50">
      <div className="h-[5px] bg-white bg-opacity-20 w-full">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
