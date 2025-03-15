// class Queue{
//     constructor(value){
//         this.items = []
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length == 0
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "queue is empty"
//         }else{
//             return this.items[0]
//         }
//     }
//     size(){
//         return this.items.length
//     }

//     print(){
//         if(this.isEmpty()){
//             return "queue is empty"
//         }else{

//             console.log(this.items.toString())
//         }
//     }
// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.dequeue()
// queue.print()
// console.log(queue.peek())
// console.log(queue.size());




// ********** Queue using Linked List // ********

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class QUEUE {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size == 0
//     }
//     getSize() {
//         return this.size
//     }
//     enqueue(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     dequeue() {
//         if (this.size == 1) {
//             this.tail = null
//         }

//         this.head = this.head.next
//         this.size--
//     }

//     print(){
//         let curr = this.head
//         let listValues = ""
//         while(curr){
//             listValues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValues)
//     }

//     peek(){
//         if(this.isEmpty()){
//             return "queue is empty"
//         }else{
//             return this.head.value
//         }
//     }

// }
// const queue = new QUEUE()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.getSize())
// console.log(queue.peek())
// queue.print()



//! ================== Double Ended Queue ================== !//

// class double{
//     constructor(){
//         this.stack=[]
//     }
//     addToFront(value){
//         this.stack.unshift(value)
//     }
//     addToLast(value){
//         this.stack.push(value)
//     }
//     removeFromFirst(){
//         this.stack.shift()
//     }
//     removeFromLast(){
//         this.stack.pop()
//     }
//     print(){
//         console.log(this.stack); 
//     }
// }

// const queue = new double()
// queue.addToFront(50)
// queue.addToLast(70)
// queue.removeFromLast()
// queue.print(); 



//! ================== Queue using Stack ================== !//

class QueueUsingStack {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value) {
        this.stack1.push(value)
    }

    dequeue() {
        if (this.stack1.length == 0 && this.stack2.length == 0) {
            return "queue is empty"
        }
        if (this.stack2.length == 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()) 
            }
        }
        return this.stack2.pop()
    } 

    print() {
        console.log("queue:", [...this.stack2.reverse(), ...this.stack1])
    }
}

const queue = new QueueUsingStack()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()