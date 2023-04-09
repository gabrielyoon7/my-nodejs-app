console.log("1");
setTimeout(() => console.log("2"));
new Promise((resolve) => resolve()).then(() => {
  console.log("3");
});
// test
console.log("4");
setTimeout(() => console.log("5"));
new Promise((resolve) => resolve()).then(() => {
  console.log("6");
});
// test
console.log("7");
setTimeout(() => console.log("8"));
new Promise((resolve) => resolve()).then(() => {
  console.log("9");
});
