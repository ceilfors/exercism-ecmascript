const bigInt = require('./lib/big-integer')

const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

class Grains {
  square (square) {
    return bigInt(2).pow(square - 1).toString()
  }

  total () {
    return range(1, 64)
      .reduce((total, square) => total.add(bigInt(this.square(square))), bigInt(0))
      .toString()
  }
}

export default Grains
