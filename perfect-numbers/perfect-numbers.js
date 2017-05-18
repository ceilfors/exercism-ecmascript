class PerfectNumbers {
  classify (number) {
    if (number <= 0) throw Error('Classification is only possible for natural numbers.')
    const divisors = this.getFactors(number)
    const sum = divisors.reduce((a, b) => a + b, 0)
    return this.classifyNumber(number, sum)
  }

  classifyNumber (number, aliquotSum) {
    if (number === 1 || aliquotSum < number) {
      return 'deficient'
    } else if (aliquotSum === number) {
      return 'perfect'
    } else {
      return 'abundant'
    }
  }

  getFactors (number) {
    return [...Array(Math.floor(number / 2) + 1).keys()]
              .slice(1)
              .filter(i => number % i === 0)
  }
}

export default PerfectNumbers
