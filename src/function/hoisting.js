console.dir(add)
console.dir(sub)

console.log(add(1, 2))
// console.log(sub(1, 2)) //TypeError: sub is not a function

function add(a, b) {
  return a + b
}

var sub = function (a, b) {
  return a - b
}
