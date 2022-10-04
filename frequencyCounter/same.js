// function same(arr, arr2) {
//   const obj = {};
//   arr2.forEach(element => obj[element] = obj[element] ? obj[element] + 1 : 1);

//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     const duplicate = element*element;
//     if (obj[duplicate]) 
//       obj[duplicate]--;
//     else
//       return false;
//   }

//   return true;
// }

function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    // if (!(key ** 2 in frequencyCounter2))
    //   return false;

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key])
      return false;
  }

  return true;
}

(function main() {
  console.log(same([1, 2, 3], [4, 1, 9]));
  console.log(same([1, 2, 3, 2], [4, 1, 9, 4]));
  console.log(same([1], [4]));
})();