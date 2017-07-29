export default class Series {
  constructor (string) {
    this.string = string
  }

  get digits () {
    return [...this.string].map(digit => Number(digit))
  }

  slices (size) {
    if (size > this.digits.length) throw new Error('Slice size is too big.')
    return this.digits
      .map((value, index, array) => (index > array.length - size) ? null : array.slice(index, index + size))
      .filter(slice => slice !== null)
  }
}
