async function getPopularMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return ["장화신은 고양이", "똑똑똑", "와칸다 포에버", "다이 하트", "플레인", "아바타: 물의 길"];
}

function something() {
  //✨✨✨✨✨✨✨✨✨✨✨✨✨✨ 수정 가능 영역
  //✨✨✨✨✨✨✨✨✨✨✨✨✨✨
  getPopularMovies()
  console.log();
}
something();
