const sumLargestNumbers = function (data) {
  for (var i = 0; i < data.length; i++) {
    var secondMax = Math.max.apply(null, data)
    data.splice(data.indexOf(secondMax), 1)
    return Math.max.apply(null, data)
  }
  for (var x = 0; x < data.length; x++) {
    var max = Math.max(data)
    return max
  } sumOfTwoLargestNum = secondMax + max
  return sumOfTwoLargestNum
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

