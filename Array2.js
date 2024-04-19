const arr1 = [{x: 1}, {x: 2}];
const arr2 = Array.from(arr1);
arr2.push({x: 3});

// 참조타입 요소의 내부값이 바뀔 경우
arr1[0].x = 0;
console.log(arr1, arr2);