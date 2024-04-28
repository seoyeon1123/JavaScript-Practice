//18세 이상의 사용자 이름을 쉼표로 구분한 대문자로 출력하는 코드를 작성해보자

const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 23 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 30 },
  { name: 'Eddie', age: 28 }
];

console.log(users.filter(({age})=> age>=18)
.map(({name})=> name.toUpperCase())
.join(', ')
);

//위의 배열 들 중 , 가장 큰 수를 출력하는 가장 간결한 코드를 작성해보자
const x = [12, 37, 5, 42, 19];
const y = [28, 4, 33, 21, 50];
const z = [47, 13, 9, 36, 22];

console.log(Math.max(...x),Math.max(...y),Math.max(...z));