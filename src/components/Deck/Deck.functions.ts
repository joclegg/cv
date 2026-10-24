export function clampSlide({
  index,
  count,
}: {
  index: number
  count: number
}): number {
  return Math.min(Math.max(index, 0), count - 1)
}

export function slideFromScroll({
  scrollLeft,
  width,
}: {
  scrollLeft: number
  width: number
}): number {
  return width > 0 ? Math.round(scrollLeft / width) : 0
}
