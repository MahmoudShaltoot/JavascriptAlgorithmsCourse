function merge(arr, l, m, r) {
  n1 = m - l + 1;
  n2 = r - m;

  L = new Array(n1);
  M = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }

  for (let j = 0; j < n2; j++) {
    M[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= M[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = M[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = M[j];
    j++;
    k++;
  }
}

function merge_sort(arr, l, r) {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);

    merge_sort(arr, l, m);
    merge_sort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

(function main() {
  const arr = [9, 8, 7, 6, 5, 4, 3, 2];
  merge_sort(arr, 0, arr.length - 1);
  
  console.log(arr);
})();
