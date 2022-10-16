// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// add whatever parameters you deem necessary - good luck!
function flatten(arr) {
  const result = [];

  function flat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) flat(arr[i]);
      else result.push(arr[i]);
    }
  }

  flat(arr);
  return result;
}

(function main() {
  console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5] 
  console.log(flatten([1, [2, [3, 4], [[5]]]]));  // [1, 2, 3, 4, 5] 
  console.log(flatten([[1], [2], [3]])); // [1,2,3] 
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3] 
})();
