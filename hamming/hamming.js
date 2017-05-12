class Hamming {
  compute (dnaStrand1, dnaStrand2) {
    if (dnaStrand1.length !== dnaStrand2.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    return [...dnaStrand1].filter((nucleic, index) => nucleic !== dnaStrand2[index]).length
  }
}

export default Hamming
