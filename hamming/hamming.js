class Hamming {
  compute (dna1, dna2) {
    let strand1 = [...dna1]
    let strand2 = [...dna2]

    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    let differences = 0
    for (let i = 0; i < strand1.length; i++) {
      if (strand1[i] !== strand2[i]) {
        differences++
      }
    }
    return differences
  }
}

export default Hamming
