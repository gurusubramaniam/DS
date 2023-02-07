/**
In computer science, a linear search or sequential search is a method for finding an element within a list. 
It sequentially checks each element of the list until a match is found or the whole list has been searched.
**/

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
