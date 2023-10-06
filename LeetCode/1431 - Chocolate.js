var kidsWithCandies = function (candies, extraCandies) {
  let maxValue = candies[0],
    outPut = [];

  for (let j = 1; j < candies.length; j++) {
    if (candies[j] >= maxValue) {
      maxValue = candies[j];
    } 
  }
  for (let i = 0; i < candies.length; i++) {
    outPut.push(candies[i] + extraCandies >= maxValue);
  }

  console.log(maxValue);
  return outPut;
};

kidsWithCandies([8, 1, 1, 5, 5, 7, 9, 3, 3], 3);
