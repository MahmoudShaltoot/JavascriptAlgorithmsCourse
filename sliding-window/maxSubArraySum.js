function maxSubArraySum(arr, n) {
  if (arr.length == 0 || n > arr.length) return null;
  if (arr.length == 1) return arr[0];

  let temp = 0;
  for (let j = 0; j < n; j++) {
    temp += arr[j];
  }
  let max = temp;

  for (let i = 0, j = n; j < arr.length; i++, j++) {
    temp = temp - arr[i] + arr[j];
    max = Math.max(temp, max);
  } 

  return max;
}

(function main() {
console.log(maxSubArraySum([1,2,3,4,1,5,8,3,9], 2));
})()