// Time Complexity : o(n) space Complexity : O(n)
var reverseVowels = function (str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'],
    left = 0,
    s = [...str]
    right = s.length - 1;
    
  while (left < right) {
    while (left < s.length && vowels.indexOf(s[left]) == -1) {
      left++;
    }
    while (right >= 0 && vowels.indexOf(s[right])== -1 ) {
      right--;
    }
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      left ++ ; 
      right --
    }
  }
  return s.join("");
};

console.log(reverseVowels("vowels"))
