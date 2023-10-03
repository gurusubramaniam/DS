/** 
Given an array sory the elements in ascending or descneding order using Quick Sory Alogirth 
in QuickSort Alogirthm we need to pick an element and compare it with the elements in the array and 
if the current element is less than the pivot move it to left array. 
If they are greater than the current pivot move it to the right array. We need to iterated the 
arrays till the lenght of the array is <2.  
*/
function quickSort(arr) {
  if (arr.length < 2) { return arr }
  let pivot = arr[arr.length - 1];
  var leftArr = [], rightArr = [];
  
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
      console.log(`step ${i} : left array`, leftArr)
    } else {
      rightArr.push(arr[i])
      console.log(`step ${i} : right array`, rightArr)
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

//console.log(quickSort([-6, 20, 8, -2, 4]))
console.log(quickSort([-6, 20, 8, -2, 4, 8, -1, 9]))

// Time complexity in Big O is O(n^2) , O(nlogn)
