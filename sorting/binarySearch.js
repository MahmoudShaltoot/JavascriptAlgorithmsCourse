function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (true) {
    if (left > right) return -1;

    let mid = Math.floor((right + left) / 2);
    if (num == arr[mid]) return mid;
    else if (num > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

function main() {
    console.log(binarySearch([1,2,3,4,5],2)) // 1
    console.log(binarySearch([1,2,3,4,5],3)) // 2
    console.log(binarySearch([1,2,3,4,5],5)) // 4
    console.log(binarySearch([1,2,3,4,5],6)) // -1
    console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 10)) // 2
    console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 95)) // 16
    console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 100))   // -1

}

main();
