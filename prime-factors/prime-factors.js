const findSmallestFactor = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return i
  }
  return num
}

const getFactors = (num, primeFactors) => {
  if (num === 1) {
    return primeFactors
  }
  const smallestFactor = findSmallestFactor(num)
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
