

//     removeValue(value) {
//         if (this.isEmpty()) {
//             return null
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while (prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             if (prev.next) {
//                 const removedNode = prev.next
//                 prev.next = removedNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     search(value) {
//         let curr = this.head
//         let index = 0
//         while (curr) {
//             if (curr.value == value) {
//                 return index
//             } else {
//                 curr = curr.next
//                 index++
//             }
//         }
//     }

//     reverse() {
//         let prev = null
//         let curr = this.head

//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev

//     }


//     print() {
//         if (this.isEmpty()) {
//             console.log("list is empty")
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }

// }
// const list = new LinkedList()

// list.append(30)
// list.append(40)
// list.prepend(20)

// list.print()


// function linearSearch(arr,target){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
//     return -1
// }


// console.log(linearSearch([2,3,4,5,1,8,5],58))


// function recursiveBinarySearch (arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let mid = Math.floor((leftIndex + rightIndex) /2)

//     if(target == arr[mid]){
//         return mid
//     }else if(target < arr[mid]){
//         return search(arr,target,leftIndex, mid-1)
//     }else{
//         return search (arr,target,mid+1,rightIndex)
//     }
// }
// console.log(recursiveBinarySearch([-5,2,4,6,10],4))



// function factorial(num){
//     if(num ==0 || num == 1 ){
//         return 1;
//     }

//     return num*factorial(num-1)
// }
// console.log(factorial(5))


// function fibonacci(n){
//   if(n==0) return 0
//   if(n==1) return 1
//   return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(6))



// function reverse(str){
//     if(str.length == 0){
//         return ""
//     }
//     return reverse(str.slice(1)) + str[0]
// }

// console.log(reverse("hello"))



// let str = "malayalams"
// function palindrome(left, right) {
//     if (left > right) {
//         return true
//     }

//     if(str[left]!==str[right]){
//         return false
//     }
//     return palindrome(left+1 , right-1)
// }
// console.log(palindrome(0, str.length - 1))




// function arraySum(arr,){
//     if(arr.length == 0){
//         return 0;
//     }
//     return arraySum(arr.slice(1)) +arr[0]
// }


// console.log(arraySum([2,3,4,5,6]))




// function reverse (str){
//     if(str.length ==0){
//         return ""
//     }

//     return reverse(str.slice(1)) + str[0]

// }
// console.log(reverse("hello"))












// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev= prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     removeMiddle (index){
//         if(index <0 || index>= this.size){
//             return null

//         }
//         let removedNode
//         if(index == 0){
//             removedNode = this.head.value
//             this.head = this.head.next
//             this.size--
//             return removedNode
//         }
//         let prev  = this.head
//         for(let i =0 ;i<index-1 ; i++){
//             prev = prev.next
//         }
//         if(prev.next){
//            let removedValue = prev.next
//            removedNode = removedValue.value
//            prev.next = removedValue.next
//            this.size--
//            return removedNode
//         }


//     }



//    print(){
//     if(this.isEmpty()){
//         console.log("list is empty")
//     }else{
//         let curr = this.head
//         let listValues = ''
//         while(curr){
//             listValues += `${curr.value} `
//             curr= curr.next
//         }
//         console.log(listValues)
//     }
//    }
// }

// const list = new LinkedList()
// list.append(56)
// list.append(70)
// list.append(80)
// list.append(90)
// list.append(95)
// console.log(list.removeMiddle(Math.floor(list.size/2)))
// list.print()


// function reverse (str){
//     if(str.length == 0){
//         return ""
//     }
//     return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse("hello"))


// let str = "hello"

// let a = ""
// for(let i=str.length-1; i>=0;i--){
//     a +=str[i]
// }
// console.log(a)






// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size == 0
//     }
//     getSize() {
//         return this.size
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }



//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }

//         if (index == 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }

//     }


//     remove(value) {
//         if (this.isEmpty()) {
//             return null
//         }

//         if (this.head.value == value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         }
//         let prev = this.head
//         while (prev.next && prev.next.value !== value) {
//             prev = prev.next
//         }
//         if (prev.next) {
//             let removedNode = prev.next
//             prev.next = removedNode.next
//             this.size--
//             return value
//         }
//         return null
//     }

//     removeIndex(index) {
//         if (index < 0 || index >= this.size) {
//             return null
//         }
//         let removedValue
//         if (index == 0) {
//             removedValue = this.head.value;
//             this.head = this.head.next
//             this.size--
//             return removedValue;
//         }
//         let prev = this.head
//         for (let i = 0; i < index - 1; i++) {
//             prev = prev.next
//         }
//         if (prev.next) {
//             let removedNode = prev.next
//             removedValue = removedNode.value;
//             prev.next = removedNode.next
//             this.size--
//             return removedValue
//         }
//         return null

//     }

//     reverse() {
//         let prev = null
//         let curr = this.head

//         while (curr) {
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev

//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("list is empty")
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }

// }

// const list = new LinkedList()
// list.append(40)
// list.append(50)
// list.prepend(10)
// list.prepend(5)
// list.insert(35, 2)
// list.print()
// console.log(list.removeIndex(2))
// list.print()
// list.reverse()
// list.print()




