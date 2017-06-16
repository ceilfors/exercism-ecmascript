class BufferFullError extends Error {}
class BufferEmptyError extends Error {}

export {
  BufferFullError,
  BufferEmptyError
}

export default (size) => {
  let buffer = []

  return {
    read: () => {
      if (buffer.length === 0) throw new BufferEmptyError()
      return buffer.shift()
    },
    write: (item) => {
      if (buffer.length === size) throw new BufferFullError()
      if (item) buffer.push(item)
    },
    forceWrite: (item) => {
      if (buffer.length === size) buffer.shift()
      if (item) buffer.push(item)
    },
    clear: () => { buffer = [] }
  }
}
