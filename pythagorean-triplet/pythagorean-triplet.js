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

  // static where () {
  //   return [new this(1, 2, 3)]
  // }
}
