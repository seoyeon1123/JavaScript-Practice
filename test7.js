const numbers1 = [1,2,3,4,5];

const odds = numbers1.filter(x => !(x%2 ===0))
.map(x => x*10).forEach(x=>console.log(x));

//reduce를 이용하여 최대값을 구하는 코드를 만들어보자

const numbers = [1,3,2,5,4];
const max = numbers.reduce(
  (acc,curr) => (acc > curr ? acc : curr )
);
console.log(max);


//사용자가 직업별로 몇명 있는지 객체로 반환하는 코드를 작성해보자
const users = [
  { name: 'Alice', job: 'developer' },
  { name: 'Bob', job: 'designer' },
  { name: 'Charlie', job: 'developer' },
  { name: 'David', job: 'manager' },
  { name: 'Eve', job: 'developer' }
];

const jobCounts = users.sort((a,b) => a.job > b.job ? 1: -1)
.map(user => user.job)
.reduce((acc, curr) => {
  if (acc[curr]) { // 현재 직업이 이미 존재하는 경우
    acc[curr]++; // 개수를 1 증가
  } else {
    acc[curr] = 1; // 현재 직업이 처음 등장하는 경우, 개수를 1로 초기화
  }
  return acc;
}, {});
console.log(jobCounts);
