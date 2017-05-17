class PerfectNumbers {
  classify (number) {
    if (number <= 0) throw Error('Classification is only possible for natural numbers.')
    const divisors = this.getDivisors(number)
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

  getDivisors (number) {
    const divisors = []
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        divisors.push(i)
      }
    }
    return divisors
  }
}

export default PerfectNumbers
