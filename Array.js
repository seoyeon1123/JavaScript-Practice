const arr = new Array(3);
console.log(arr.length);
//생성자 함수로 배열을 만들고 괄호 안에 숫자를 넣으면 길이가 3인 배열을 만들어준다. 

//인자가 하나의 숫자라도 이를 요소로 가지는 배열을 생성한다.

const arr1 = Array.of(1,2,3,4,5);
console.log(arr1)
//of 괄호 안에 적은 요소들로 배열을 만듬

//frm0 -> 유사배열객체, 배열, 이터러블을 인자로 받아서 배열로 반환
//이터러블 -> 문자열, 객체 등 반복적인게 가능한 것

const arr2 = Array.from([1,2,3]);
const arr3 = Array.from('abcde');
const arr4 = Array.from({
  '0':true,
  '1':false,
  length:2
})

console.log(arr2, arr3, arr4);

const arrLike = {
  0: '🍎',
  1: '🍌',
  2: '🥝',
  3: '🍒',
  4: '🫐',
  length: 5
};

for(const item of Array.from(arrLike)){
  console.log(item);
}

const arr6 = [1,2,3];
const arr7 = Array.from(arr6);

arr7.push(4);

console.log(arr6);
console.log(arr7);

arr6[0] = 0;
console.log(arr6, arr7);


