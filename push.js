//push, unshift - 배열에 값을 추가

const arr = [1,2,3];
const x = arr.push(5);

console.log(x, arr);
//arr.push를 반환하면 총 배열의 길이가 출력된다.

const y = arr.push(5,6,7);
console.log(y, arr);

//unshift -> 배열 맨 앞에 값을 추가

//pop, unshift -> 값을 제거하고 제거한 값을 반환
const arr4 = [1,2,3,4,5];
const x1 = arr4.pop();
console.log(x1,arr4)

//splice -> 원하는 위치에 요소들을 추가 및 삭제

const arr5 = [1,2,3,4,5,6,7,8];

arr5.splice(2,4);
//(배열 변경할 인덱스 위치, 제거할 요소 갯수, 추가할 요소)
console.log(arr5);