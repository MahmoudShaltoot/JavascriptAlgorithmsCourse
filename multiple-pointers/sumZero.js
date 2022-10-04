function sumZero(arr) {
  for (let left = 0, right = arr.length - 1; left < right;) {
    const sum = arr[left] + arr[right];
    if (sum == 0)
      return [arr[left], arr[right]]
    else if (sum > 0)
      right--;
    else
      left++;
  }
}

(function main() {
  console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
  console.log(sumZero([-2, 0, 1, 3]));
  console.log(sumZero([1, 2, 3]));
})();