function CustomPromise(executor) {
  let resolveCallback = null;
  let rejectCallback = null;

  this.then = function (onResolve, onReject) {
    resolveCallback = onResolve;
    rejectCallback = onReject;
  };

  function resolve(value) {
    setTimeout(() => {
      if (typeof resolveCallback === 'function') {
        resolveCallback(value);
      }
    }, 0);
  }

  function reject(error) {
    setTimeout(() => {
      if (typeof rejectCallback === 'function') {
        rejectCallback(error);
      }
    }, 0);
  }

  executor(resolve, reject);
}

const myPromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error('Random number is too large'));
    }
  }, 1000);
});

myPromise.then(
  (result) => console.log('Resolved:', result),
  (error) => console.error('Rejected:', error)
);
