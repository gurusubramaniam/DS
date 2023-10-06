

function brut_sumOfThree(nums, n = 3) {
  // if(nums.length < n) {return NaN}
  let maxSum = 0;
  // we need to subtract 3 so that out loop is not running out of bound
  for (let i = 0; i <= nums.length - 3; i++) {
    let sum = 0;
    // Add i+3 because we are interested in 3 elements everytime i is incremented by 1, 
    // We need 3 elements from position of i. 
    // Index for array starts from 0
    for (let j = i; j < (i + 3); j++) {
      sum = sum + nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}

// console.log(brut_sumOfThree([1, 4, 2, 10, 2, 3, 1, 0, 20]));

function Not_sliding_sumOfThree(nums, n=3) {
    let maxSum = 0, sum=0;
    for(let i=0; i <= nums.length-n; i++ ) {
        sum = nums[i] + nums[i+1] + nums[i+2]
        maxSum = (sum > maxSum) ? sum : maxSum
        console.log(nums[i], "sum:::", sum, "maxSum : : : " , maxSum)
    }
    return maxSum
}
console.log(Not_sliding_sumOfThree([1, 4, 2, 10, 2, 3, 1, 0, 20]));