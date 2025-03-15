
// // linearsearch
// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5,2,3,4,9,6,7],88))

function binarySearch (arr,target){
    return search(arr,target,0,arr.length-1)
}

function search (arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let mid = Math.floor((leftIndex+rightIndex) /2)
    if(target == arr[mid]){
        return mid

    }else if(arr[mid] > target){
        return search(arr,target,leftIndex,mid-1)

    }else{
        return search(arr,target,rightIndex,mid+1)
    }
}



console.log(binarySearch([-5,2,3,5,6,7,8],6))


