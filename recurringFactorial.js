function recurssionFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * recurssionFactorial(n-1)
}

console.log(recurssionFactorial(5))

//Time Complexity O(2^n)
