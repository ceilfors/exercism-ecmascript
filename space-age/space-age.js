const SECONDS_IN_EARTH_YEAR = 31557600

const round = (number) => Number(Math.round(number + 'e2') + 'e-2')

const earthYearsMap = new Map([
  ['Earth', 1],
  ['Mercury', 0.2408467],
  ['Venus', 0.61519726],
  ['Mars', 1.8808158],
  ['Jupiter', 11.862615],
  ['Saturn', 29.447498],
  ['Uranus', 84.016846],
  ['Neptune', 164.79132]
])

class SpaceAge {
  constructor (seconds) {
    this.seconds = seconds

    earthYearsMap.forEach((earthYears, planet) => {
      this['on' + planet] = () => round(seconds / SECONDS_IN_EARTH_YEAR / earthYears)
    })
  }
}

export default SpaceAge
