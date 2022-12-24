function insertionSort(arr, size) {
  for (let i = 1; i < size; i++) {
    let j = i - 1;
    let key = arr[i];
    while (key < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

(function main() {
  const arr = [2, 3, 4, 6, 5, 7, 8, 1, 0];

  insertionSort(arr, arr.length);

  console.log(arr);
})();
