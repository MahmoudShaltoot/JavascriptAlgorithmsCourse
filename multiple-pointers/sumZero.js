function sumZero(arr) {
  for (let i = 0, j = arr.length - 1; i < j;) {
    const sum = arr[i] + arr[j];
    if (sum == 0)
      return [arr[i], arr[j]]
    else if (sum > 0)
      j--;
    else
      i++;
  }
}

(function main() {
  console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
  console.log(sumZero([-2, 0, 1, 3]));
  console.log(sumZero([1, 2, 3]));
})();