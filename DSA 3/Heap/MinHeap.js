class MinHeap {
    constructor() {
        this.heap = []
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChild(i) {
        return 2 * i + 1
    }

    rightChild(i) {
        return 2 * i + 2
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(index) {
        let parentIndex = this.parent(index)

        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {

            this.swap(index, parentIndex)
            index = parentIndex

            parentIndex = this.parent(index)
        }
    }


    heapifyDown(index) {
        let left = this.leftChild(index)
        let right = this.rightChild(index)
        let smallest = index

        while (left < this.heap.length && this.heap[smallest] > this.heap[left]) {
            smallest = left
        }

        while (right < this.heap.length && this.heap[smallest] > this.heap[right]) {
            smallest = right
        }

        if (smallest !== index) {
            this.swap(index, smallest)
            this.heapifyDown(smallest)
        }
    }


    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return root
    }

    heapSort(arr) {
        const minheap = new MinHeap()
        const result = []

        for (let value of arr) {
            minheap.insert(value)
        }

        while (minheap.heap.length > 0) {
            result.push(minheap.remove())
        }

        return result
    }



    printHeap() {
        console.log("heap", this.heap)
    }
}

const min = new MinHeap()

min.insert(6);
min.insert(1);
min.insert(2);
min.insert(3);
min.insert(4);
min.insert(5);
// min.remove()
let arr = [4, 6, 7, 8, 9, 1, 2]
console.log(min.heapSort(min.heap))
min.print()
