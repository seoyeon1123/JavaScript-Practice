

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
function getAverage(){
  let result = 0, count = 0;
  for(const num of arguments){
      if(typeof num !== 'number') continue;
      result += num;
      count ++;
  }
  return result / count;
}

console.log(getAverage(1,3,5,6,"가", "나","다"));


// ♻️ 새로고침 후 실행
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function combineArms () {
  return (x, y) => {
    let result = x;
    for (const arm of arguments) {
      if (typeof arm !== 'function') continue;
      result = arm(result, y);
    }
    return result;
  }
}

const add_mul = combineArms(add, mul, 1, true);
const add_mul_sub = combineArms(add, mul, sub);
const add_mul_sub_div = combineArms(add, mul, sub, div);

// 💡 익명 함수 사용됨
const add_mul_sub_div_pow
  = combineArms(add, mul, sub, div, (x, y) => x ** y);