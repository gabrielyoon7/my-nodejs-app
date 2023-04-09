for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i)); // 10이 10번 출력
}

for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => console.log(i)); // 0 1 2 3 4 5 6 7 8 9
  })(i);
}
