class MaxHeap {
    constructor() {
        this.heap = []
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChild(i) {
        return i * 2 + 1
    }
    rightChild(i) {
        return i * 2 + 2
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

        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex)
            index = parentIndex
            parentIndex = this.parent(index)

        }
    }

    heapifyDown(index) {

        let left = this.leftChild(index)
        let right = this.rightChild(index)
        let largest = index

        while (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left
        }

        while (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right
        }

        if (largest !== index) {
            this.swap(largest, index)
            this.heapifyDown(largest)
        }
    }


    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length == 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)

        return root
    }


    heapSort(arr) {
        const maxHeap = new MaxHeap()
        let result = []

        for (let value of arr) {
            maxHeap.insert(value)
        }

        while (maxHeap.heap.length > 0) {
            result.push(maxHeap.remove())
        }
        return result
    }

    print() {
        console.log(this.heap)
    }
}


const max = new MaxHeap();

max.insert(1);
max.insert(2);
max.insert(3);
max.insert(7);
max.insert(6);
max.insert(5);
max.remove()
const arr = [6, 5, 34, 12, 7, 3, 98];

console.log("sorted value", max.heapSort(max.heap))
max.print()



