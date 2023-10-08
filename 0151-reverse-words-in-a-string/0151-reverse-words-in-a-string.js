/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = s.split(" ")
    let output =''
    
    for(let y=word.length-1 ; y >= 0; y--) {
        if(word[y] !== '') {
            output+= (output? ' ' : '') + word[y]
        }
    }
    return output
};