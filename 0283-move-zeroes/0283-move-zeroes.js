/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let left=0, right=0; 
    // while(left < nums.length){
    //     // Swapping the non zero element to hr left of the given Array. 
    //     if(nums[left] !== 0) {
    //         [nums[left],nums[right]] = [nums[right], nums[left]];
    //         right ++ 
    //     }
    //     left ++
    // }
    let left=0; 
    for(let i=0; i< nums.length; i++) {
        if(nums[i]!==0) {
            [nums[left], nums[i]] =[nums[i], nums[left]]
            left ++
        }
    }
};