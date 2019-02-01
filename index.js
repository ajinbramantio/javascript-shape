function calculateSquareArea(size1, size2) {
  return size1 * size2;
}
console.log(calculateSquareArea(4, 4));

function calculateSquarePerimeter(side) {
  return side * 4;
}
console.log(calculateSquarePerimeter(5));

function calculateCircleArea() {
  return Math.PI;
}
console.log(calculateCircleArea());

function calculateCircleCircumference(number1, number2) {
  let A = number1;
  let B = Math.PI;
  let C = number2;

  return A * B * C;
}
console.log(calculateCircleCircumference(2, 5));

function calculateCubeArea(number) {
  return 6 * number * number;
}
console.log(calculateCubeArea(4));

function calculateCubeVolume(number) {
  return number * 3;
}
console.log(calculateCubeVolume(3));

function calculateTubeArea(number) {
  return Math.PI * number * number;
}
console.log(calculateTubeArea(5));

function calculateTubeVolume(radius, high) {
  return Math.PI * radius ** 2 * high;
}
console.log(calculateTubeVolume(2, 7));
