function capitalizeWords(arr, i = 0) {
  // add whatever parameters you deem necessary - good luck!
  if (i == arr.length) return arr;
  arr[i] = arr[i].toUpperCase();
  return capitalizeWords(arr, ++i);
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

(function main() {
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizeWords(words));
})()