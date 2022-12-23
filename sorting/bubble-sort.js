function bubble_sort (arr, size) {
    for (let steps = 0; steps < size - 1 ; steps++) {
        let swap = 0;
        for (let i = 0; i < size - steps - 1; i++) {
            if (arr[i] > arr[i+1]) {
                // swap
                let tmp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = tmp

                swap = 1;
            }
        }
        // no swap means sorteed array
        if (!swap) break;
    }
}


(function main() {
    const arr = [5,4,3,2,1];
    bubble_sort(arr, arr.length); 
    console.log(arr);
})();
