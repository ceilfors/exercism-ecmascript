const gigasecond = 10 ** 9

class Gigasecond {
  constructor (date) {
    this._date = date
  }

  date () {
    return new Date(+this._date + gigasecond * 1000)
  }
}

export default Gigasecond
