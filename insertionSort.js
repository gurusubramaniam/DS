function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let noToInsert = arr[i]
    let j = i - 1
    while (j > 0 && arr[j] > noToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1;
      console.log(`noToInsert ${noToInsert}`, `sortElement ${arr[j + 1]}`, `step${j} : `, arr);
    }
    arr[j + 1] = noToInsert;
    console.log("Placed Element", arr)
  }
}
var sampleData = [-6, 20, 8, -2, 4]
console.log(insertionSort(sampleData))
console.log(sampleData)

/**
output 
Placed Element [ -6, 20, 8, -2, 4 ]
noToInsert 8 sortElement 20 step0 :  [ -6, 20, 20, -2, 4 ]
Placed Element [ -6, 8, 20, -2, 4 ]
noToInsert -2 sortElement 20 step1 :  [ -6, 8, 20, 20, 4 ]
noToInsert -2 sortElement 8 step0 :  [ -6, 8, 8, 20, 4 ]
Placed Element [ -6, -2, 8, 20, 4 ]
noToInsert 4 sortElement 20 step2 :  [ -6, -2, 8, 20, 20 ]
noToInsert 4 sortElement 8 step1 :  [ -6, -2, 8, 8, 20 ]
Placed Element [ -6, -2, 4, 8, 20 ]
**/
