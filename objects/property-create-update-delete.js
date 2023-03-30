const person = {
  name: 'hey',
  country: 'Korea',
};
console.log(person.name); // hey
person.name = 'Gabriel';
person.age = 28;
delete person.country;
console.log(person); // { name: 'Gabriel', age: 28 }
