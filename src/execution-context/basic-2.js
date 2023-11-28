var x= 1;
const y= 2;
function foo (a) {
  var x= 3;
  const y= 4;
  function bar(b) {
    const z = 5;
    console.log(a + b+ x +y+ z); // 10 + 20 + 3 + 4 + 5 => 42
  }
  bar (10);
}

foo(20); // 42
