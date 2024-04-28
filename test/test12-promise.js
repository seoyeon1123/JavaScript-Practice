// 50%확률로 홀, 짝을 반환하는 비동기적 작업을 하는 함수

function getOddEven () {
  return new Promise((resolve) => {
    setTimeout(()=>{
      const res = Math.random() <0.5 ? '홀' : '짝';
      resolve(res);
    })
  })
}

function concatRes() {
  let finalRes = '';

  return getOddEven()
  .then(res1 =>{
    finalRes += res1;
    return getOddEven();
  })
  .then(res2 => {
    finalRes += ',' +res2;
    return getOddEven();
  })
  .then(res3 => {
    finalRes += ',' + res3;
    return finalRes;
  })
}

concatRes().then(res =>{ 
  console.log(res);
});
