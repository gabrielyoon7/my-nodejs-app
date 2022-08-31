// const arr = [1,2,3,4];
// arr.forEach(console.log);

console.log(score);
score = 80;
var score;
console.log(score);

var wow;
console.log(wow??"yeah")

const person = {
    name:'Gabriel',
    sayHello:function(){
        console.log('hihi');
    }
}
console.log(typeof person)
console.log(person)

delete person.sayHello;

console.log(person)

const empty={}
console.log(typeof empty)
console.log(empty)

empty.a=1

console.log(empty)

console.log('****')

var ooo = {
    name:'Yoon'
}

var copy = ooo;
console.log(copy===ooo);
copy.name='Gabriel';
ooo.address = 'Seoul';
console.log(ooo);
console.log(copy);