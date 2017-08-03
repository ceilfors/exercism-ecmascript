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
  setTail (node) {
    this.tail = node
    if (node) {
      this.head = this.head ? this.head : node
    } else {
      this.head = null
    }
  }

  setHead (node) {
    this.head = node
    if (node) {
      this.tail = this.tail ? this.tail : node
    } else {
      this.tail = null
    }
  }

  count () {
    return this._count(this.head, 0)
  }

  push (element) {
    const node = new Node(element)
    linkNodes(this.tail, node)
    this.setTail(node)
  }

  pop () {
    const value = this.tail.value
    this.setTail(this.tail.previous)
    return value
  }

  shift () {
    const value = this.head.value
    this.setHead(this.head.next)
    return value
  }

  unshift (element) {
    const node = new Node(element)
    linkNodes(node, this.head)
    this.setHead(node)
  }

  delete (value) {
    const node = this._find(this.head, value)
    if (node) {
      if (node === this.head) {
        this.setHead(this.head.next)
      } else if (node === this.tail) {
        this.setTail(this.tail.previous)
      } else {
        linkNodes(node.previous, node.next)
      }
    }
  }

  _find (node, value) {
    if (!node) return null
    return node.value === value ? node : this._find(node.next, value)
  }

  _count (node, total) {
    if (!node) return total
    return this._count(node.next, total + 1)
  }
}
