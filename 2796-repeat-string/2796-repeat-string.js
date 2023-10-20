/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function(times) {
    let result = ''; 
    for(let i = 0 ; i < times ; i ++ ) {
        result += this
    }
    return result
    // if(times === 0) {return "";}
    // return this + this.replicate(times-1)
}