const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

class Sieve {
  constructor (number) {
    this.number = number
  }

  get primes () {
    const numbers = range(2, this.number)
    const markers = Array(numbers.length)
    // Mark numbers
    for (let i = 0; i < numbers.length; i++) {
      const marker = markers[i]
      if (!marker) {
        const base = numbers[i]
        for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[j] % base === 0) {
            markers[j] = true
          }
        }
      }
    }
    // Collect numbers
    const primeNumbers = []
    for (let i = 0; i < numbers.length; i++) {
      if (!markers[i]) {
        primeNumbers.push(numbers[i])
      }
    }
    return primeNumbers
  }
}

export default Sieve
