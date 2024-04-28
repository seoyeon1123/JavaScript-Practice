//이 코드는 두 개의 비동기 함수를 사용하여 두 수를 무작위로 생성하고, 그 두 수를 곱한 결과를 출력합니다. 함수를 실행하면 1초 간격으로 두 개의 무작위 수가 생성되고, 그 두 수를 곱한 결과가 출력됩니다.

function randomNum() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      resolve(randomNumber);
    },1000)
  })
}

async function result (){
  const num1 = await randomNum();
  const num2 = await randomNum();

  const result = `${num1} * ${num2} = ${num1 * num2}`;
  console.log(result);

  return result;
}