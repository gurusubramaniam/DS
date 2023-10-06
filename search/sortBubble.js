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

// function sorting() {
//   let nums = [9, 8, 7, 6, 3, 4, 2, 1, -1,0, -5 , 9];
  
//   for(i=0; i<nums.length; i++) {
//     for(j = 0; j < nums.length -i -1 ; j++) {
//         if(nums[j] > nums[j+1]){
//             [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
//         }
//     }
//   }
//  return nums
// }

// console.log(sorting())