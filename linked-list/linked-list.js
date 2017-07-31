class Node {
  constructor (value) {
    this.value = value
  }
}

export default class LinkedList {
  push (element) {
    const node = new Node(element)
    if (this.tail) {
      node.previous = this.tail
      this.tail.next = node
    }
    this.tail = node

    if (!this.head) {
      this.head = node
    }
  }

  pop () {
    const value = this.tail.value
    this.tail = this.tail.previous
    if (this.tail) {
      this.tail.next = null
    } else {
      this.head = null
    }
    return value
  }
}
