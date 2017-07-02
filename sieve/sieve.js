const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

class Sieve {
  constructor (number) {
    this.number = number
  }

  get primes () {
    const markPrime = (sieveNumbers, i = 0) => {
      if (i === sieveNumbers.length - 1) return sieveNumbers
      const newlyMarkedNumbers = sieveNumbers
        .slice(i + 1, sieveNumbers.length)
        .map(sn => ({ number: sn.number, prime: sn.prime && sn.number % sieveNumbers[i].number !== 0 }))
      return markPrime(sieveNumbers.slice(0, i + 1).concat(newlyMarkedNumbers), ++i)
    }

    const sieveNumbers = range(2, this.number)
      .map(number => { return { number: number, prime: true } })

    return markPrime(sieveNumbers)
      .filter(sn => sn.prime)
      .map(sn => sn.number)
  }
}

export default Sieve
