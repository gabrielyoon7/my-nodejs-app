const callNextPage = () => {
  let page = 0;
  return () => {
    console.log(page++);
  }
}
const nextPage = callNextPage();
nextPage();
nextPage();
nextPage();
