function selectionSort (arr, size) {
    for (let i = 0; i < size; i++) {
        let min = i;
        for (let j = i+1; j < size; j++) {
            if (arr[min] > arr[j]) min = j
        }
        
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
}

(function main () {

    const arr = [3,5,6,2,4,8,7,1,6];
    selectionSort(arr, arr.length)
    console.log(arr);

})()