console.log('import 성공!');
const observeIntersection = (target, callback) => {
  const observer = new IntersectionObserver((entries) => {
    const isElementVisible = entries[0].isIntersecting;
    if (isElementVisible) {
      callback();
    }
  });
  observer.observe(target);
}

const el = document.querySelector('.target');
const callNextPage = () => {
  let page = 0;
  return () => {
    console.log(page++);
  }
}
observeIntersection(el, callNextPage());
