/**
 * @param {string} s
 * @return {string[]}
 * Time Complexity O(M x n) Space Complexity O(n)
 */
var printVertically = function(s) {
    let maxLength=0 ; 
    s = s.split(" ");
    let result =[];
    // Finding the max length of word in given Array
    for (let i=0; i< s.length; i ++) {
        maxLength = Math.max(maxLength, s[i].length)
    }

    // Iterating to the max lenght of the word we calculated
    for (let j=0; j<maxLength; j++) {
        let output = '';
        // Iterate every character in the word
        for(char of s) {
            console.log(char)
            // if the current index is not available to read add Space
            // else add the word to the sting. 
            if(j >= char.length) {output += " "}
            else {output += char[j]}
        }
    // Push the output string to the array 
    result.push(output.trimEnd())

    //return Array
    console.log(result)
    }
    return result
};