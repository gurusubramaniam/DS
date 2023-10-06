function binarySearch(target = 2) {
    let nums = [9, 8, 7,2,-9,7,8], left =0, right = nums.length -1 ;
    while ( left <= right ) {
        let mid = Math.floor(left + (right - left)/2); 
        if( target === nums[mid]) {
            return mid
        } 
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return -1;
}

console.log(binarySearch())