/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     var val = parseInt(x.toString().split('').reverse().join(''),10);
//     return (val === x) ? true : false
// };
var isPalindrome = function(x) {
    var originalVal = x;
    var reversed =0 , temp ;
    while (originalVal > 0) {
        temp = originalVal % 10; 
        reversed = reversed * 10 + temp
        originalVal = Math.floor(originalVal / 10)
    }
    return x === reversed
}
