const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const multipy = (a,b) => a * b;

const isOdd = x => x % 2 === 0;
const isPositive = x => x > 0;

function calcAndEval(calc, eval, x, y){
return eval(calc(x,y));
}

console.log(calcAndEval(add, isOdd, 4, 5)
, calcAndEval(sub, isPositive, 6, 8));

function getIntroFunc(name, fomal) {
	return fomal
? function(){
console.log(`안녕하세요. 저는 ${name} 입니다.`);}
: function(){
console.log(`안녕안녕. 니는 ${name}~`);}
}

const seoIntro = getIntroFunc('이서연', true);
const wonIntro = getIntroFunc('표원식', false);

seoIntro();
wonIntro();


function getAverage() {
  let result = 0;
  for (const num of arguments) {
      result += num;
  }

  return result / arguments.length; // 오타 수정: arguments.length로 수정
}

console.log(
  getAverage(1, 4, 7) // 함수 호출 시 세미콜론(;)을 콤마(,)로 변경
);
