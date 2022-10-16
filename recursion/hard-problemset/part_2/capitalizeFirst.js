// add whatever parameters you deem necessary - good luck!
function capitalizeFirst(arr, i = 0) {
  if (i == arr.length) return arr;

  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  return capitalizeFirst(arr, ++i);
}


(function main() {
  console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
})()