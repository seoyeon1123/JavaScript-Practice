//concat -> 배열에 다른 배열이나 값을 이어붙인 결과

const arr1 = [1,2,3];
const arr2 = ['a','b','c'];

const arr3 = arr1.concat(arr2);
console.log(arr3)

const arr4 = [1,2,3,4,5,6,7,8,9];
const arr5 = arr4.slice(3,7);
console.log(arr5);
//잘라낸 것을 반환한다. 