export default class Luhn {
  constructor (input) {
    if (input.length <= 1) {
      this.valid = false
      return
    }

    const luhnTotal = input.replace(/\s/g, '')
      .split('')
      .reverse()
      .map(digit => Number(digit))
      .map((num, index) => (index + 1) % 2 === 0 ? num * 2 : num)
      .map(num => num > 9 ? num - 9 : num)
      .reduce((sum, value) => sum + value, 0)
    this.valid = luhnTotal % 10 === 0
  }
}
