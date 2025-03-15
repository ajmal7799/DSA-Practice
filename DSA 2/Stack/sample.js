
// class Stack {
//     constructor(value) {
//         this.Stack = []
//     }
//     isEmpty() {
//         return this.size() == 0
//     }
//     size() {
//         return this.Stack.length
//     }

//     push(value) {
//         return this.Stack.push(value)
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         } else {
//             return this.Stack.pop()
//         }
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         } else {
//             return this.Stack[this.size() - 1]
//         }
//     }

//     print() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         } else {    
//             this.Stack.forEach((x) => console.log(x))
//         }
//     }

// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// console.log(stack.peek())




// **********Stack using linkedlist***********

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class STACK {
//     constructor() {
//         this.top = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     push(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.top = node;
//         } else {
//             node.next = this.top;
//             this.top = node;
//         }
//         this.size++;
//     }

//     pop() {
//         if (this.isEmpty()) {
//             console.log("Stack is empty");
//             return;
//         }
//         this.top = this.top.next;
//         this.size--;
//     }

//     peek() {
//         return this.isEmpty() ? "Stack is empty" : this.top.value;
//     }

//     print() {
//         let curr = this.top;
//         let listValues = "";
//         while (curr) {
//             listValues += `${curr.value} `;
//             curr = curr.next;
//         }
//         console.log(listValues.trim());
//     }
// }

// // Example usage
// const stack = new STACK();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.getSize()); // Output: 3
// console.log(stack.peek()); // Output: 30
// stack.print(); // Output: 30 20 10
// stack.pop();
// stack.print(); // Output: 20 10



// const reverseWords = function (s) {

//     const split = s.split(" ")
//     const stack = []

//     for (let str of split) {
//         stack.push(str)
//     }

//     let result = ""

//     while (stack.length) {
//         let current = stack.pop();
//         if (current) {
//             result += " "+current
//         }

//     }
//     return result.trim()


// }

// console.log(reverseWords("the sky is blue"))
// console.log(reverseWords("a good   example"))




// **********Stack using undo redo operation***********

// class UndoRedo{
//     constructor(){
//         this.undoStack = []
//         this.redoStack = []
//     }
//     do(action){
//         this.undoStack.push(action)
//         this.redoStack = []
//     }

//     undo(){
//         if(this.undoStack.length == 0){
//             console.log("Nothing to undo")
//             return
//         }
//         let action = this.undoStack.pop()
//         this.redoStack.push(action)
//         console.log("undone:",action)
//     }
//     redo(){
//         if(this.redoStack.length == 0){
//             console.log("Nothing to redo")
//             return;
//         }
//         let action = this.redoStack.pop()
//         this.undoStack.push(action)
//         console.log(action)
//     }

// }

// const editor = new UndoRedo();
// editor.do("Type A")
// editor.do("Type B")

// editor.undo()
// editor.redo()
// editor.undo()
// editor.undo()
// editor.undo()



// **********Stack using palindrome checking***********

// function palindrome(str){
//    let stack=[]
//    for(let i of str){
//     stack.push(i)
//    }
//    let current = ""
//   while(stack.length){
//      current += stack.pop()
//   }
//   return  current== str
// }
// const str = "malayalam"
// console.log(palindrome(str))