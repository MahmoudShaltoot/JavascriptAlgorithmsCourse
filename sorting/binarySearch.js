function binarySearch(arr, num) {
  left = 0;
  right = arr.length - 1;
  while (true) {
    if (left > right) return -1;

    mid = Math.floor((right + left) / 2);
    if (num == arr[mid]) return mid;
    else if (num > mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

function main() {
  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], -1)); 
}

main();
