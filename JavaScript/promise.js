const DEADLINE1 = 1400;

function getRelayPromise (name, start, failMsg) {
  console.log(`👟 ${name} 출발`);

  // 💡 랜덤 시간만큼 달리고 결과를 반환하겠다는 약속을 만들어 반환
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE1) {
        console.log(`🚩 ${name} 도착 - ${(start + time)/1000}초`);
        resolve(start + time);

      } else {
        console.log(failMsg);
        reject((start + time) / 1000);
      }
    }, time);
  })
}
const DEADLINE = 1400;

function getRelayPromise (name, start, failMsg) {
  console.log(`👟 ${name} 출발`);

  // 💡 랜덤 시간만큼 달리고 결과를 반환하겠다는 약속을 만들어 반환
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE) {
        console.log(`🚩 ${name} 도착 - ${(start + time)/1000}초`);
        resolve(start + time);

      } else {
        console.log(failMsg);
        reject((start + time) / 1000);
      }
    }, time);
  })
}