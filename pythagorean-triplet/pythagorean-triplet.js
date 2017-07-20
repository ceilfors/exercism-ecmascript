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

  static where ({maxFactor}) {
    const triplets = []
    for (let a = 0; a <= maxFactor; a++) {
      for (let b = a + 1; b <= maxFactor; b++) {
        for (let c = b + 1; c <= maxFactor; c++) {
          const triplet = new this(a, b, c)
          if (triplet.isPythagorean()) {
            triplets.push(triplet)
          }
        }
      }
    }
    return triplets
  }
}
