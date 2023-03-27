function aaa() {
  setTimeout(() => {
    console.log("d");
  }, 0);
  console.log("c");
}
setTimeout(() => {
  console.log("a");
  aaa();
}, 0);
Promise.resolve().then(() => {
  aaa();
  console.log("b");
});