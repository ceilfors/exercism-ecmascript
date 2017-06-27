const accumulate = (array, accumulator) => {
  const result = []
  array.forEach(item => result.push(accumulator(item)))
  return result
}

export default accumulate
