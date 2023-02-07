function bubbleSort(arr) {
  var sort;
  do {
    sort = false
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        sort = true;
      }
    }
  } while (sort)
  return arr
}

console.log(bubbleSort([-6, 10, 8, -2, 4]))

// Time complexity Big O notation O(n^2)
