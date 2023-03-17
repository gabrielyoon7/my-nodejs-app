const getPopularMovies = new Promise((resolve, reject) => {
  setTimeout(resolve, Math.random() * 4000 + 1000, "외부 API 접근한 결괏값");
});

// 아래에 답안을 작성하세요
console.error("대기 시간이 오래 걸립니다");
