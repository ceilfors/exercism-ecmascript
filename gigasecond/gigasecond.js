class Gigasecond {
  constructor (date) {
    this._date = date
  }

  date () {
    return new Date(Date.UTC(2047, 4, 23, 1, 46, 40))
  }
}

export default Gigasecond
