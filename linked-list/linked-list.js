class Node {
  constructor (value) {
    this.value = value
  }
}

const linkNodes = (n1, n2) => {
  if (n1) {
    n1.next = n2
  }
  if (n2) {
    n2.previous = n1
  }
}

export default class LinkedList {
  constructor () {
    this._count = 0
  }

  setTail (node) {
    this.tail = node
    this.head = this.head ? this.head : node
    if (node) {
      node.next = null
    } else {
      this.head = null
    }
  }

  setHead (node) {
    this.head = node
    this.tail = this.tail ? this.tail : node
    if (node) {
      node.previous = null
    } else {
      this.tail = null
    }
  }

  count () {
    return this._count
  }

  push (element) {
    const node = new Node(element)
    linkNodes(this.tail, node)
    this.setTail(node)
    this._count++
  }

  pop () {
    const value = this.tail.value
    this.setTail(this.tail.previous)
    this._count--
    return value
  }

  shift () {
    const value = this.head.value
    this.setHead(this.head.next)
    this._count--
    return value
  }

  unshift (element) {
    const node = new Node(element)
    linkNodes(node, this.head)
    this.setHead(node)
    this._count++
  }
}
