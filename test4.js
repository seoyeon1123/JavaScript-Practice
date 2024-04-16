//  실행 예시
function calculateCircleArea(radius){
  console.log(Math.PI * Math.pow(radius,2))
}

calculateCircleArea(5); // 78.53981633974483

//2분의 1 확률로 true 또는 false 를 출력하는 코드를 작성해보세요.

function randomBoolean() {
  return Math.random() < 0.5;
}

console.log(randomBoolean());

//인자로 연, 월, 일을 숫자로 받아 해당 날짜가 주말인지 여부를 Boolean으로 반환하는 함수를 작성해보세요.

function isWeekend(year, month, day){
  const date = new Date(year, month, day);
  const dayofWeek = date.getDay();
  return dayofWeek === 0 || dayofWeek === 6;
}

const day1 = isWeekend(2024,7,8);
console.log(day1);

