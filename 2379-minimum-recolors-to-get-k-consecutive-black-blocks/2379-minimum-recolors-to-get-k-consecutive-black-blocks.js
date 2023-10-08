/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let min = k, currentMin=0, start=0; 

    for(let i = 0 ; i < blocks.length; i++ ) {
        if(blocks[i] === 'W') {
            currentMin += 1
        }

        if(i + 1 >=k) {
            min = Math.min(min, currentMin); 
            if(blocks[start++] === 'W') {
                currentMin --
            }
        }
    }
    return min
};