/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) {
        return num
        } else {
        num = [...num.toString()].reduce((a,b) => a + Number(b), 0)
        return addDigits(num)
    }
};