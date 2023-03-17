const getPopularMovies = new Promise((resolve, reject) => {
  setTimeout(resolve, Math.random() * 4000 + 1000, "외부 API 접근한 결괏값");
});

const error3secondsAfter = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
})

Promise.race([
  getPopularMovies,
  error3secondsAfter,
])
  .then((value) => {
    console.log(value);
  }).catch(() => {
    console.error("대기 시간이 오래 걸립니다");
  });
