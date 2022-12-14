function bubble_sort (arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                // swap
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }        
    }
}


(function main() {
    const arr = [5,4,3,2,1];
    bubble_sort(arr); 
    console.log(arr);
})();
