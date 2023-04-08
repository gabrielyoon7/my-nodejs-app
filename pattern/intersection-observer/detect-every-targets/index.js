console.log('import 성공!');
const observeIntersection = (targets, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  });
  targets.forEach(target => observer.observe(target));
}

const targets = document.querySelectorAll('.target');
const sayHello = () => console.log('Hello');
observeIntersection(targets, sayHello);
