const keep = (array, predicate) => {
  const newArr = []
  array.forEach(item => {
    if (predicate(item)) newArr.push(item)
  })
  return newArr
}

export default {
  keep
}
