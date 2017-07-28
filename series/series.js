export default class Series {
  constructor (string) {
    this.string = string
  }

  get digits () {
    return [...this.string].map(digit => Number(digit))
  }
}
