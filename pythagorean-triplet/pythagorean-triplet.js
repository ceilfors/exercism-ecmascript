function * combination (min, max) {
  for (let a = min; a <= max; a++) {
    for (let b = a + 1; b <= max; b++) {
      for (let c = b + 1; c <= max; c++) {
        yield [a, b, c]
      }
    }
  }
}

export default class Triplet {
  constructor (a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum () {
    return this.a + this.b + this.c
  }

  product () {
    return this.a * this.b * this.c
  }

  isPythagorean () {
    return this.a ** 2 + this.b ** 2 === this.c ** 2
  }

  static where ({minFactor = 0, maxFactor, sum}) {
    return Array.from(combination(minFactor, maxFactor))
      .map(([a, b, c]) => new this(a, b, c))
      .filter(triplet => triplet.isPythagorean())
      .filter(triplet => sum ? triplet.sum() === sum : true)
  }
}
