console.log('import 성공!');
const observeIntersection = (target, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  });
  observer.observe(target);
}

const el = document.querySelector('.target');
const sayHello = () => console.log('Hello');
observeIntersection(el, sayHello);

