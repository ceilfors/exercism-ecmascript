const keep = (array, predicate) =>
  array.reduce((acc, item) => predicate(item) ? (acc.push(item), acc) : acc, [])

const discard = (array, predicate) =>
  keep(array, (item) => !predicate(item))

export default {
  keep,
  discard
}
