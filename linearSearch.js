function linearSearch(target) {
  const arr = [-5, 2, 10, 4, 6]
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1
}

console.log(linearSearch(10))
console.log(linearSearch(7))

// BIG O O(n)
