// Time O(n) & Space Complexity O(1)
var createObject = function (keysArr, valuesArr) {
  const obj = {};
  for (const i in keysArr) {
    if (!obj.hasOwnProperty(keysArr[i])) {
      obj[keysArr[i]] = valuesArr[i];
    }
  }
  return obj;
};
