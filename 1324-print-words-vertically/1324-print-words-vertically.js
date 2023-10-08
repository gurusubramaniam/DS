/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let maxLength=0 ; 
    s = s.split(" ");
    let result =[];
    for (let i=0; i< s.length; i ++) {
        maxLength = Math.max(maxLength, s[i].length)
    }

    for (let j=0; j<maxLength; j++) {
        let output = '';
        for(char of s) {
            console.log(char)
            if(j >= char.length) {output += " "}
            else {output += char[j]}
        }
    result.push(output.trimEnd())
    console.log(result)
    }
    return result
};