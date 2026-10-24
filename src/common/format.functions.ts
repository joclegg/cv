const MONTH_YEAR_FORMAT = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
})

export function formatMonth(value: string): string {
  const [year, month] = value.split('-').map(Number)
  return month
    ? MONTH_YEAR_FORMAT.format(new Date(year, month - 1))
    : String(year)
}

export function formatRange({
  start,
  end,
}: {
  start: string
  end?: string
}): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`
}
