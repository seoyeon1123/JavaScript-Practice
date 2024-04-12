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

  console.log(
    add_mul(8, 3),
    add_mul_sub(8, 3),
    add_mul_sub_div(8, 3),
    add_mul_sub_div_pow(8, 3)
  );