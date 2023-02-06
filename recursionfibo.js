function recfibo(n){
  if (n<2) return n;
  return recfibo(n-1) + recfibo (n-2)
}
console.log(recfibo(0))
console.log(recfibo(1))
console.log(recfibo(2))
console.log(recfibo(3))
console.log(recfibo(4))
console.log(recfibo(6))

// o(2^n)
