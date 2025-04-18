// binary search

// function binarySearch ( arr, target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if(target == arr[middleIndex]) {
//             return middleIndex
//         }else if (target < arr[middleIndex]){
//             rightIndex = middleIndex -1 
//         }else{
            // leftIndex = middleIndex +1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,6,7],2)) 


// recursive binary search 

// function recursiveBinarySearch (arr,target){
//     return search( arr, target, 0, arr.length-1 )
// }

// function search( arr, target, leftIndex, rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }
    
//     let middleIndex = Math.floor((leftIndex + rightIndex ) /2 )

//     if(target === arr[middleIndex] ){
//         return middleIndex
//     }

//     if(target < arr[middleIndex]){
//        return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//        return search(arr,target , middleIndex+1 , rightIndex)
//     }

// }
// console.log(recursiveBinarySearch([-5,2,4,6,10],111))



function recursiveBinarySearch (arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let mid = Math.floor((leftIndex + rightIndex) /2)

    if(target == arr[mid]){
        return mid
    }else if(target < arr[mid]){
        return search(arr,target,leftIndex, mid-1)
    }else{
        return search (arr,target,mid+1,rightIndex)
    }

}

console.log(recursiveBinarySearch([-5,2,4,6,10],4))