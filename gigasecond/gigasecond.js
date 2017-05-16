const gigasecond = 1000000000

class Gigasecond {
  constructor (date) {
    this._date = date
  }

  date () {
    return new Date(+this._date + gigasecond * 1000)
  }
}

export default Gigasecond
