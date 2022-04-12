const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
function finalPosition(arr) {
  let output = [0, 0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "north") output[1] += 1;
    if (arr[i] === "south") output[1] -= 1;
    if (arr[i] === "east") output[0] += 1;
    if (arr[i] === "west") output[0] -= 1;
  }
  return output
}
console.log(finalPosition(moves));
