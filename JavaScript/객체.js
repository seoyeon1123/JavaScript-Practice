const person1 = {
  name: "이서연",
  age: 25,
  married: false
};
console.log(person1.birthdate);
console.log(person1['job']);

person1.job = 'programmer';
person1['bloodtype'] = 'A';

console.log(person1);

let a = 10;
let b = a;
a = 20;

let c = { value: 10 };
let d = c;
c.value = 20;

console.log(a, b, c.value, d.value);