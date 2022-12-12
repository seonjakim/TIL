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
    let flag
    do {
      flag = false
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (parent && parent < element) {
        this.values[parentIdx] = element
        this.values[idx] = parent
        idx = parentIdx
        flag = true
      }
    } while (flag)
  }
}

const heap = new MaxBinaryHeap()
heap.insert(30)
heap.insert(55)
heap.insert(45)
