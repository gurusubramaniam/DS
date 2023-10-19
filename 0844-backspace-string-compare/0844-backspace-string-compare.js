/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function processString(inputStr){
        let resultString = []
        for(let i = 0 ; i < inputStr.length ; i++) {
            if(inputStr[i] !== '#') {
                resultString.push(inputStr[i])
            } else if (inputStr[i] === '#') {
                resultString.pop()
            }
         }
         return resultString.toString()
    }
    let firstString = processString(s), secondString = processString(t)
    if(firstString.length !== secondString.length) {return false;}
    return(firstString.toString() === secondString.toString())
    
};