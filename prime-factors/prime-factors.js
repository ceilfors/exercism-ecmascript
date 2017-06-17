const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

const getFactors = (num, primeFactors) => {
  if (num === 1) {
    return primeFactors
  }
  const smallestFactor = range(2, num).find(factor => num % factor === 0)
  primeFactors.push(smallestFactor)
  return getFactors(num / smallestFactor, primeFactors)
}

class PrimeFactors {
  for (num) {
    const primeFactors = []
    getFactors(num, primeFactors)
    return primeFactors
  }
}

export default PrimeFactors
