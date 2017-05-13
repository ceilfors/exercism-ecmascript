class Transcriptor {
  toRna (dna) {
    return [...dna].map(nucleotide => this.transcribeDnaNucleotideToRna(nucleotide)).join('')
  }

  transcribeDnaNucleotideToRna(nucleotide) {
    const nucleotideMap = {
      'C': 'G',
      'G': 'C',
      'A': 'U',
      'T': 'A', 
    }
    if (nucleotide in nucleotideMap) {
      return nucleotideMap[nucleotide]
    } else {
      throw new Error('Invalid input DNA.')
    }
  }
}

export default Transcriptor
