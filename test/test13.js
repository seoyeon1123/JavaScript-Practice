function getOddEven(){
  return new Promise((resolve) => {
    setTimeout(() =>{
      const res = Math.random() < 0.5 ? '홀' : '짝';
      resolve(res);
    })
  })
}

async function concatRes(){
  const res1 = await getOddEven();
  const res2 = await getOddEven();
  const res3 = await getOddEven();

  const results = res1 + ', ' + res2 + ', ' + res3;
  console.log(results);

  return results

}

async function excute(){
  const res = await concatRes();
  console.log(res);
}

excute();