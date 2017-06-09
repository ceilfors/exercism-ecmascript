const pad = (string) => ('0' + string).substring(string.toString().length - 1)

const toClockHour = (hour, min = 0) => {
  const clockHour = (hour + Math.floor(min / 60)) % 24
  return clockHour < 0 ? 24 + clockHour : clockHour
}

const toClockMin = min => {
  const clockMin = min % 60
  return clockMin < 0 ? 60 + clockMin : clockMin
}

const at = (hour, min = 0) => {
  const clockHour = toClockHour(hour, min)
  const clockMin = toClockMin(min)
  const clockString = `${pad(clockHour)}:${pad(clockMin)}`

  return {
    plus: (min) => at(clockHour, clockMin + min),
    minus: (min) => at(clockHour, clockMin - min),
    toString: () => clockString,
    equals: (other) => clockString === other.toString()
  }
}

export default at
