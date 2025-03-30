// Binary tree

// class Node {
    //    constructor(value) {
    //        this.value = value;
    //        this.left = null;
    //        this.right = null;
    //    }
    // }
    
    // class BinaryTree {
    //    constructor() {
    //        this.root = null;
    //    }
    
    //    insert(value) {
    //        const newNode = new Node(value);
    //        if (!this.root) {
    //            this.root = newNode;
    //            return this;
    //        }
    
    //        let current = this.root;
    //        while (true) {
    //            if (value === current.value) return undefined;
    //            if (value < current.value) {
    //                if (!current.left) {
    //                    current.left = newNode;
    //                    return this;
    //                }
    //                current = current.left;
    //            } else {
    //                if (!current.right) {
    //                    current.right = newNode;
    //                    return this;
    //                }
    //                current = current.right;
    //            }
    //        }
    //    }
    
    //    find(value) {
    //        if (!this.root) return false;
    
    //        let current = this.root;
    //        while (current) {
    //            if (value === current.value) return current;
    //            if (value < current.value) {
    //                current = current.left;
    //            } else {
    //                current = current.right;
    //            }
    //        }
    //        return false;
    //    }
    // }
    
    // const bt = new BinaryTree()
    
    // bt.insert(3)
    // bt.insert(5)
    // bt.insert(6)
    // bt.insert(7)
    // console.log(bt.find(6))





// binary search tree

// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root == null
//     }

//     insert(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }

//     }

//     insertNode(root, node) {
//         if (root.value > node.value) {
//             if (root.left == null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if (root.right == null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false
//         }
//         if (root.value == value) {
//             return true
//         } else if (root.value > value) {
//             return this.search(root.left, value)
//         } else {
//             return this.search(root.right, value)
//         }
//     }

//     // Bfs
//     levelOrder() {
//         let queue = []
//         queue.push(this.root)

//         while (queue.length > 0) {
//             let curr = queue.shift()
//             console.log(curr.value)
//             if (curr.left) {
//                 queue.push(curr.left)
//             }
//             if (curr.right) {
//                 queue.push(curr.right)
//             }
//         }
//     }

//     // dfs
//     preOrder(root) {
//         if (root) {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root) {
//         if (root) {
//             this.preOrder(root.left)
//             console.log(root.value)
//             this.preOrder(root.right)
//         }
//     }

//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }

//     max(root) {
//         if (!root.right) {
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }

//     delete(value) {
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value) {
//         if (root == null) {
//             return null
//         }
//         if (root.value > value) {
//             root.left = this.deleteNode(root.left, value)
//         } else if (root.value < value) {
//             root.right = this.deleteNode(root.right, value)
//         } else {
//             if (!root.left && !root.right) return null
//             if (!root.left) return root.right
//             if (!root.right) return root.left

//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }


//     findLargestElement() {
//         let largest = null
//         let count = 0

//         function inOrder(root) {
//             if (!root) return
//             inOrder(root.right)
//             count++
//             if (count == 2) {
//                 largest = root.value
//                 return

//             }
//             inOrder(root.left)

//         }
//         inOrder(this.root)
//         return largest
//     }


//     height(root) {
//         if (!root) {
//             return -1
//         }
//         let leftHeight = this.height(root.left)
//         let rightHeight = this.height(root.right)
//         return Math.max(leftHeight, rightHeight) + 1
//     }

//     isBalanced() {
//         return this.balanceCheck(this.root) !== -1
//     }

//     balanceCheck(root) {
//         if (root == null) return 0

//         const leftHeight = this.balanceCheck(root.left)
//         const rightHeight = this.balanceCheck(root.right)
//         if (Math.abs(leftHeight - rightHeight) > 1) return -1
//         return Math.max(leftHeight, rightHeight) + 1
//     }

// }


// const tree = new BinarySearchTree()
// tree.insert(10)
// tree.insert(7)
// tree.insert(9)
// tree.insert(30)
// tree.insert(40)
// tree.insert(50)
// tree.insert(20)
// console.log(tree.secondLargest())
// console.log(tree.isBalanced())
// console.log(tree.search(tree.root, 30))
// console.log(tree.height(tree.root))
// tree.delete(10)
// console.log(tree.findLargestElement())
// tree.levelOrder()
// tree.preOrder(tree.root)
// tree.inOrder(tree.root)



// Minheap
// class Minheap {
//     constructor() {
//         this.heap = []
//     }

//     parent(i) {
//         return Math.floor((i - 1) / 2)
//     }

//     leftChild(i) {
//         return i * 2 + 1
//     }

//     rightChilde(i) {
//         return i * 2 + 2
//     }

//     swap(i, j) {
//         return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
//     }

//     insert(value) {
//         this.heap.push(value)
//         this.heapfyUp(this.heap.length - 1)
//     }

//     heapfyUp(index) {
//         let parentIndex = this.parent(index)

//         while (this.heap[parentIndex] > this.heap[index]) {
//             this.swap(index, parentIndex)
//             index = parentIndex
//             parentIndex = this.parent(index)
//         }
//     }

//     heapfyDown(index) {
//         let leftChild = this.leftChild(index)
//         let rightChild = this.rightChilde(index)
//         let smallest = index

//         if (leftChild < this.heap.length && this.heap[smallest] > this.heap[leftChild]) {
//             smallest = leftChild
//         }

//         if(rightChild<this.heap.length && this.heap[smallest]> this.heap[rightChild]){
//             smallest = rightChild
//         }

//         if(index !== smallest){
//             this.swap(index,smallest)
//             this.heapfyDown(smallest)
//         }
//     }

//     remove() {
//         if (this.heap.length == 0) return null
//         if (this.heap.length == 1) return this.heap.pop()

//         let root = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapfyDown(0)
//         return root
//     }

//     print() {
//         console.log(this.heap)
//     }

//     heapSort(arr){
//         const minheap = new Minheap()
//         let result = []

//         for(let value of arr){
//             minheap.insert(value)
//         }

//         while(minheap.heap.length >0){
//             result.push(minheap.remove())
//         }
//         return result

//     }
// }

// const heap = new Minheap()
// heap.insert(10)
// heap.insert(5)
// heap.insert(8)
// heap.insert(15)
// heap.insert(30)
// heap.insert(20)
// heap.remove()
// let arr = [3,4,5,7,93,87,12]
// console.log(heap.heapSort(arr))
// heap.print()


// maxHeap
// class MaxHeap {
//     constructor() {
//         this.heap = []
//     }

//     parent(i) {
//         return Math.floor((i - 1) / 2)
//     }

//     swap(i, j) {
//          [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
//     }

//     leftChild(i) {
//         return i * 2 + 1
//     }
//     rightChild(i) {
//         return i * 2 + 2
//     }

//     insert(value) {
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length - 1)
//     }

//     heapifyUp(index) {
//         let parentIndex = this.parent(index)

//         while (this.heap[index] > this.heap[parentIndex]) {
//             this.swap(index, parentIndex)
//             index = parentIndex
//             parentIndex = this.parent(index)
//         }
//     }

//     heapifyDown(index) {
//         let leftChild = this.leftChild(index)
//         let rightChild = this.rightChild(index)
//         let largest = index

//         if(leftChild <this.heap.length && this.heap[largest] <this.heap[leftChild]){
//             largest = leftChild
//         }
//         if(rightChild <this.heap.length && this.heap[largest] < this.heap[rightChild]){
//             largest = rightChild
//         }

//         if(index !== largest){
//             this.swap(index,largest)
//             this.heapifyDown(largest)
//         }
//     }

//     remove() {
//         if (this.heap.length == 0) return null
//         if (this.heap.length == 1) return this.heap.pop()
//         let root = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return root
//     }

//     heapSort(arr){
//         const maxHeap = new MaxHeap()
//         let result = []

//         for(let value of arr){
//             maxHeap.insert(value)
//         }
//         while(maxHeap.heap.length>0){
//             result.push(maxHeap.remove())
//         }
//         return result.reverse()
//     }

//     print() {
//         console.log(this.heap)
//     }


// }

// const heap = new MaxHeap()
// heap.insert(45)
// heap.insert(35)
// heap.insert(10)
// heap.insert(9)
// heap.insert(7)
// heap.remove()
// heap.remove()
// heap.print()
// let arr = [4,34,5,6,7,3,2]
// console.log(heap.heapSort(arr))


// Trie

// class TrieNode{
//     constructor(){
//         this.children= {}
//         this.isEnd = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let current = this.root
//         for(let char of word){
//             if(!current.children[char]){
//                 current.children[char] = new TrieNode()
//             }
//             current = current.children[char]
//         }
//         current.isEnd=true
//     }

//     search(word){
//         let current = this.root
//         for(let char of word){
//             if(!current.children[char]){
//                 return false
//             }
//             current = current.children[char]
//         }
//         return current.isEnd
//     }

//     prefix(word){
//         let current = this.root
//         for(let char of word){
//             if(!current.children[char]){
//                 return false
//             }
//             current = current.children[char]
//         }
//         return true
//     }

//     autoComplete(word){
//         let current = this.root
//         let result = []
//         for(let char of word){
//             if(!current.children[char]){
//                 return []
//             }
//             current = current.children[char]
//         }
//         this.completeWord(word,result,current)
//         return result
//     }

//     completeWord(word,result,current){
//         if(current.isEnd){
//             result.push(word)
//         }

//         for(let key in current.children){
//             this.completeWord(word+key,result,current.children[key])
//         }
//     }
// }

// const trie = new Trie()
// trie.insert("app")
// trie.insert("apple")
// trie.insert("aju")
// trie.insert("application")
// trie.insert("shamil")
// console.log(trie.autoComplete("app"))
// // console.log(trie.search('aju'))
// console.log(trie.prefix('shamil'))



// Graph

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     bfs(start){
//         let queue = [start]
//         let visited = new Set()
//         visited.add(start)

//         while(queue.length>0){
//             let vertex = queue.shift()
//             console.log(vertex)

//             for(let nei of this.adjacencyList[vertex]){
//                 if(!visited.has(nei)){
//                     queue.push(nei)
//                     visited.add(nei)
//                 }
//             }
//         }
//     }



//     dfs(start,visited=new Set()){
//         if(!visited.has(start)){
//             console.log(start)
//             visited.add(start)

//             for(let nei of this.adjacencyList[start]){
//                 this.dfs(nei,visited)
//             }
//         }
//     }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.bfs("A")