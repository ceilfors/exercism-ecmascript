const triangleTypes = {
  1: 'equilateral',
  2: 'isosceles',
  3: 'scalene'
}

const sideCombinations = [
  { sides: [0, 1], remaining: 2 },
  { sides: [0, 2], remaining: 1 },
  { sides: [1, 2], remaining: 0 }
]

class Triangle {
  constructor (a, b, c) {
    this.sides = [a, b, c]
  }

  validateLength () {
    if (!this.sides.every(side => side > 0)) throw new Error('All sides must be more greater than 0')
  }

  validateInequality () {
    if (!sideCombinations.every(c =>
      this.sides[c.sides[0]] + this.sides[c.sides[1]] >= this.sides[c.remaining]
    )) throw new Error('Violates triangle inequality')
  }

  kind () {
    this.validateLength()
    this.validateInequality()
    return triangleTypes[new Set(this.sides).size]
  }
}

export default Triangle
