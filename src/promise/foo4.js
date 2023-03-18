const getPopularMovies = new Promise((resolve, reject) => {
  setTimeout(resolve, Math.random() * 4000 + 1000, "외부 API 접근한 결괏값");
});

// 아래에 답안을 작성하세요

const errorAfter3seconds = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, () => { throw Error("dd") });
});



Promise.race([
  getPopularMovies,
  errorAfter3seconds
]).then((v) => console.log(v)).catch((e) => console.error(e));