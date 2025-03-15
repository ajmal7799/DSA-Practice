

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp

    }

}

const arr = [2, 7, 4, 6, 1, 5, 3];
insertionSort(arr)
console.log(arr)
