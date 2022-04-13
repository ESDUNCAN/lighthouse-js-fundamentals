let area = ''

let calculateRectangleArea = function (length, width) {
  area = length * width
  if (area < 0) {
    area = undefined
  } return area
}

let calculateTriangleArea = function (base, height) {
  area = (base * height) / 2
  if (area < 0) {
    area = undefined
  } return area
}

let calculateCircleArea = function (radius) {
  area = Math.PI * (radius * radius)
  if (radius < 0) {
    area = undefined
  } return area
}

console.log(calculateTriangleArea(10, 5))
