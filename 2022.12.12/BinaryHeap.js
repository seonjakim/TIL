class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  insert(el) {
    this.values.push(el)

    this.bubbleUp()
    console.log(this.values)
  }
  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    let swap
    do {
      swap = false
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (parent && parent < element) {
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx = parentIdx
        swap = true
      }
    } while (swap)
  }
  remove() {
    if (this.values.length <= 1) {
      this.values.pop()
    } else {
      let i = 0
      this.values[i] = this.values.pop()
      let swap
      do {
        swap = false
        let current = this.values[i]
        let left = i * 2 + 1
        let leftVal = this.values[left]
        let right = i * 2 + 2
        let rightVal = this.values[right]
        if (current < leftVal || current < rightVal) {
          swap = true
          if (leftVal > rightVal) {
            this.values[left] = current
            this.values[i] = leftVal
            i = left
          } else if (rightVal > leftVal) {
            this.values[right] = current
            this.values[i] = rightVal
            i = right
          } else swap = false
        }
      } while (swap)
    }
    console.log(this.values)
  }
}

const heap = new MaxBinaryHeap()
// heap.insert(30)
heap.insert(55)
// heap.insert(45)
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()
heap.remove()
