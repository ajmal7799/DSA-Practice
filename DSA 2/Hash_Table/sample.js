// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, value) {
//         const index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key) {
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key) {
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }




// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         const index = this.hash(key)
//         // this.table[index] = value
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const sameKeyItem = bucket.find(item => item[0] === key)
//             if(sameKeyItem){
//                 sameKeyItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key) {
//         const index = this.hash(key)
//         // return this.table[index]
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] == key)
//             if(sameKeyItem){
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }

//     remove(key) {
//         const index = this.hash(key)
//         // this.table[index] = undefined
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyItem = bucket.find(item => item[0] == key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem),1)
//             }
//         }

//     }

//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }
// const table = new HashTable(50)
// table.set("name", "adhii")
// table.set("age", 19)
// table.set("name","ajmal")
// table.print()




// function charFrequency(str) {
//     let frequencyTable = {}; 

//     for (let char of str) {
//         if (frequencyTable[char]) {
//             frequencyTable[char]++; 
//         } else {
//             frequencyTable[char] = 1;
//         }
//     }

//     return frequencyTable;
// }
// let str = "hello world";
// console.log(charFrequency(str));



// ********* LinearProbing *********//

// class LinearProbing {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let result = 0
//         for (let i = 0; i < key.length; i++) {
//             result += key.charCodeAt(i)
//         }
//         return result % this.size
//     }

//     set(key, value) {
//         let index = this.hash(key)
//         while (this.table[index] !== undefined &&
//             this.table[index][0] !== key) {

//             index = (index + 1) % this.size;
//         }
//         this.table[index] = [key, value]
//     }

//     get(key) {
//         let index = this.hash(key)
//         while (this.table[index] !== undefined) {
//             if (this.table[index][0] == key) {
//                 return this.table[index][1]
//             }
//             index = (index + 1) % this.size;
//         }
//         return undefined
//     }

//     remove(key) {
//         let index = this.hash(key)
//         while (this.table[index] !== undefined) {
//             if (this.table[index][0] == key) {
//                 this.table[index] = undefined;
//                 return;
//             }
//             index = (index + 1) % this.size;
//         }
//     }

//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }
// const table = new LinearProbing(50);

// table.set("name", "Suiii");
// table.set("mane", "Sulum");
// table.set("age", "25");
// table.set("place", "VPZ");
// table.set("suiand", "ronrornror");
// table.print();



// ********* Quadratic Probing *********//
// class QuadraticProbing {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key) {
//         let result = 0
//         for (let i = 0; i < key.length; i++) {
//             result += key.charCodeAt(i)
//         }
//         return result % this.size
//     }
//     set(key, value) {
//         let index = this.hash(key)
//         let i = 0;
//         while (this.table[(index + i * i) % this.size] !== undefined && this.table[(index + i * i) % this.size][0] !== key) {
//             i++
//             if (i == this.size) return
//         }
//         this.table[(index + i * i) % this.size] = { key, value }
//     }
//     get(key) {
//         let index = this.hash(key)
//         let i = 0
//         while (this.table[(index + i * i) % this.size] !== undefined) {
//             if (this.table[(index + i * i) % this.size][0] == key) {
//                 return this.table[(index + i * i) % this.size][1];
//             }
//             i++
//             if (i == this.size) return undefined
//         }
//         return undefined;
//     }

//     remove(key) {
//         let index = this.hash(key)
//         let i = 0;
//         while (this.table[(index + i * i) % this.size] !== undefined) {
//             if (this.table[(index + i * i) % this.size].key == key) {
//                 this.table[(index + i * i) % this.size] = undefined

//             }
//             i++
//             if (i == this.size) return

//         }
//         return console.log("no element found")

//     }
//     print() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i])
//             }
//         }
//     }
// }
// const hashtable4 = new QuadraticProbing(7);
// hashtable4.set("name", "ajmal");
// hashtable4.set("age", 22);
// hashtable4.set("place", "kalamassery")
// hashtable4.set("mane", "ldsjkff")
// hashtable4.set("anem", "anem")
// hashtable4.remove("age")
// hashtable4.remove("place")
// hashtable4.remove("mane")
// hashtable4.print()



// *********Rehashing*******//
// class HashTable {
//     constructor(size = 5) {
//         this.size = size;
//         this.table = new Array(this.size);
//         this.count = 0;
//     }

//     hash(key) {
//         let hash = 0;
//         for (let char of key) {
//             hash += char.charCodeAt(0);
//         }
//         return hash % this.size;
//     }

//     set(key, value) {
//         if (this.count / this.size > 0.7) {
//             this.rehash();
//         }
//         let index = this.hash(key);
//         while (this.table[index] !== undefined) {
//             index = (index + 1) % this.size;
//         }
//         this.table[index] = [key, value];
//         this.count++;
//     }

//     rehash() {
//         let oldTable = this.table;
//         this.size *= 2; 
//         this.table = new Array(this.size);
//         this.count = 0;

//         for (let item of oldTable) {
//             if (item) {
//                 this.set(item[0], item[1]);
//             }
//         }
//     }

//     print() {
//         console.log(this.table);
//     }
// }

// const hashTable = new HashTable();
// hashTable.set("name", "Ajmal");
// hashTable.set("age", "19");
// hashTable.set("place", "Vallapuzha");
// hashTable.set("mane", "Brototype");
// hashTable.set("mane", "Brototype");
// hashTable.set("mane", "Brototype");

// hashTable.print();



// ****nonrepeating element
// const nonRepeating = (arr) => {
//     let map = new Map()
//     let result = []

//     for (let i of arr) {
//         map.set(i, (map.get(i) || 0) + 1)
//     }
//     for (let i of arr) {
//         if (map.get(i) == 1) {
//             result.push(i)
//         }
//     }
//     return result
// }
// let arr = [1, 2, 3, 4, 5, 6, 2, 5, 7, 6, 6]
// console.log(nonRepeating(arr))