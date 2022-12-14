// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
  if (!arr.length) return false;
  
  if(cb(arr[0])) return true;

  arr.shift();
  return someRecursive(arr, cb)
}

(function main() {
  console.log(someRecursive([2, 4, 5, 1, 9], val => val % 2 == 0));
  console.log(someRecursive([2, 4, 5, 1, 9], val => val > 10));
}())
