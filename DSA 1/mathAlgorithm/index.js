// ******factorial*********//
// function factorial (n){
//     let result = 1;
//     for(let i = 2 ;i<=n ; i++){
//         result = result * i
//     }
//     return result


// }
// console.log(factorial(6))



// ******prime number*********//
// function isPrime(n) {
//     if (n < 2) {
//         return false
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return false
//         }
//     }
//     return true

// }
// console.log(isPrime(-1))


// ********power of two********//

// function isPowerOfTwo (n){
//     if(n < 1){
//         return false
//     }

//     while(n>1){
//         if(n % 2!==0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }
// console.log(isPowerOfTwo(16))


// ******Bitwise****//

// function isPowerOfBitwise (n){
//     if(n<1){
//         return false
//     } 
//     return (n & (n-1)) === 0

// }
// console.log(isPowerOfBitwise(8))


// *******fibonacci**********//
// function fibonacci (n){
//     const fib = [0, 1]
//     for(let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2]  
//     }
//     return fib
// }

// console.log(fibonacci(9))


// ***********fibonacci recursive********//
// function fibonacci(n) {
//     if (n < 2) {
//         return n
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(4))


// function factorial (n){
//     let result = 1;

//     for(let i = 1; i<=n; i++){
//         result = result * i
//     }
//     return result

// }
// console.log(factorial(5))

function factorial (n){
    if(n < 2){
        return n
    }
    return n*factorial(n-1)
}
console.log(factorial(5))


