export const MIN_TIMER_FONT_SIZE_VH = 8
export const MAX_TIMER_FONT_SIZE_VH = 80
export const DEFAULT_TIMER_FONT_SIZE_VH = 14

export function clampTimerFontSize(size: number) {
  return Math.min(
    MAX_TIMER_FONT_SIZE_VH,
    Math.max(MIN_TIMER_FONT_SIZE_VH, size),
  )
}
