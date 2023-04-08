const callNextPage = () => {
  let page = 0;
  return () => {
    return page++;
  }
}
const nextPage = callNextPage();
console.log(nextPage());
console.log(nextPage());
console.log(nextPage());
console.log(nextPage());
console.log(nextPage());
