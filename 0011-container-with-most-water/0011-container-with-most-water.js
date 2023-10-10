/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0 , right = height.length-1, maxArea = 0;  
    while(left < right) {
        // Width is the distance between the rightmost element and the left most element
        let width = right - left
        // Take the minimum of two numbers currently and Multiply that by the Containers in
        // between them. Math.min(height[left], height[right]) 
        maxArea = Math.max(maxArea, Math.min(height[left],height[right]) * width);
        if (height[left] <= height[right]) {
            left ++
        } else {
            right --; 
        }
    }
    return maxArea
};