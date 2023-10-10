/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = findFirst(nums, target)
    let second = findSecond(nums, target)
    return [first, second]
};

function findFirst(nums, target) {
let left =0, right = nums.length-1, first = -1; 

    while (left <= right) {
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid] === target) {
            first = mid
            //return mid
            right = mid -1
        } else if(nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return first
}

function findSecond(nums, target) {
    let left =0, right = nums.length -1, second = -1; 

    while (left <= right) {
        let mid = Math.floor(left + (right-left)/2)
        if(nums[mid] === target) {
            second = mid
            left = mid + 1
        } else if(nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return second;
}