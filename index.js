// // const arr = [1,2,3,4];
// // arr.forEach(console.log);

// console.log(score);
// score = 80;
// var score;
// console.log(score);

// var wow;
// console.log(wow??"yeah")

// const person = {
//     name:'Gabriel',
//     sayHello:function(){
//         console.log('hihi');
//     }
// }
// console.log(typeof person)
// console.log(person)

// delete person.sayHello;

// console.log(person)

// const empty={}
// console.log(typeof empty)
// console.log(empty)

// empty.a=1

// console.log(empty)

// console.log('****')

// var ooo = {
//     name:'Yoon'
// }

// var copy = ooo;
// console.log(copy===ooo);
// copy.name='Gabriel';
// ooo.address = 'Seoul';
// console.log(ooo);
// console.log(copy);


// // 12-51
// function repeat(n,f){
//     for(var i = 0 ; i < n ; i ++){
//         f(i);
//     }
// }
// var logAll = function ( i) {
//     console.log(i)
// }

// repeat(5,logAll);

// var logOdds = function(i){
//     if(i%2)console.log(i);
// }

// repeat(5,logOdds)

// //13-03

// var x = 'global';
// function foo () {
//     var x = 'local';
//     console.log(x);
// }

// foo();
// console.log(x);

// 전역 함수
function foo() {
    console.log('global function foo');
  }
  
  function bar() {
    // 중첩 함수
    function foo() {
      console.log('local function foo');
    }
  
    foo(); // ①
  }
  
  bar();