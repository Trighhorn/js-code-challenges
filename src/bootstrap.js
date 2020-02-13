function foraddtool() {
  let numbers = [1, 2, 3, 4, 5]
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

function whileaddtool() {
  let numbers = [1, 2, 3, 4, 5]
  let sum = 0
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i]
    i++
  }
  return sum
}

function dowhileaddtool() {
  let numbers = [1, 2, 3, 4, 5]
  let sum = 0
  let i = 0;

  do {
    sum += numbers[i]
    i++
  } while (i < numbers.length)
  return sum
}







console.log(foraddtool())
console.log(whileaddtool())
console.log(dowhileaddtool())