const transform = (legacy) => {
  return Object.keys(legacy).reduce((score, point) => {
    legacy[point].forEach(alphabet => {
      score[alphabet.toLowerCase()] = Number(point)
    })
    return score
  }, {})
}

export default transform
