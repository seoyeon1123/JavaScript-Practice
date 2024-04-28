function getOddEven () {
  return new Promise((resolve) => {
    setTimeout(()=>{
      const res = Math.random() <0.5 ? '홀' : '짝';
      resolve(res);
    },1000);
  })
}

async function Result () {
  const result1 = await getOddEven();
  const result2 = await getOddEven();
  const result3 = await getOddEven();

  return result1 + ', ' + result2 + ', ' + result3
}

async function excute() {
  const res = await Result();
  console.log(res);
}



