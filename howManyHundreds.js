let answer = ''

const howManyHundreds = function (num) {
  let modulo = num % 100
  let numOfHundreds = num - modulo
  if (numOfHundreds >= 100) {
    answer = numOfHundreds / 100
  } else answer = 0
  return answer
}
console.log(howManyHundreds(1000))