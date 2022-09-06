// https://github.com/wikibook/mjs/

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
// function foo() {
//     console.log('global function foo');
//   }

//   function bar() {
//     // 중첩 함수
//     function foo() {
//       console.log('local function foo');
//     }

//     foo(); // ①
//   }

//   bar();

//16-01

// const o = {};

// // 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// o.[[Prototype]] // -> Uncaught SyntaxError: Unexpected token '['
// // 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
// o.__proto__ // -> Object.prototype

// //16-02
// const person = {
//     name: 'Lee'
// };

// // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//   // {value: "Lee", writable: true, enumerable: true, configurable: true}

// const person = {
//     name: 'Lee'
//   };

//   // 프로퍼티 동적 생성
//   person.age = 20;

//   // 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
//   console.log(Object.getOwnPropertyDescriptors(person));
//   /*
//   {
//     name: {value: "Lee", writable: true, enumerable: true, configurable: true},
//     age: {value: 20, writable: true, enumerable: true, configurable: true}
//   }
//   */

// //16-06

// const person = {
//     // 데이터 프로퍼티
//     firstName: 'Ungmo',
//     lastName: 'Lee',

//     // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
//     // getter 함수
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     // setter 함수
//     set fullName(name) {
//         // 배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };

// // 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
// console.log(person.firstName + ' ' + person.lastName); // Ungmo Lee

// // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// // 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
// person.fullName = 'Heegun Lee';
// console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
// console.log(person.fullName); // Heegun Lee

// // firstName은 데이터 프로퍼티다.
// // 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(descriptor);
// // {value: "Heegun", writable: true, enumerable: true, configurable: true}

// // fullName은 접근자 프로퍼티다.
// // 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);
//   // {get: ƒ, set: ƒ, enumerable: true, configurable: true}

// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  
  // 인스턴스의 생성
  const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
  const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성
  
  console.log(circle1.getDiameter()); // 10
  console.log(circle2.getDiameter()); // 20