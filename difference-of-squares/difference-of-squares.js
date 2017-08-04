export default class Squares {
  constructor (n) {
    this.n = n
  }

  get squareOfSums () {
    const total = new Array(this.n).fill()
      .map((_, index) => index + 1)
      .reduce((acc, number) => acc + number, 0)
    return Math.pow(total, 2)
  }

  get sumOfSquares () {
    return new Array(this.n).fill()
      .map((_, index) => index + 1)
      .map(number => Math.pow(number, 2))
      .reduce((acc, number) => acc + number, 0)
  }

  get difference () {
    return this.squareOfSums - this.sumOfSquares
  }
}
