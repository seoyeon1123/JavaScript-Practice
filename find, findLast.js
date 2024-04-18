//find - 첫번째 값 반환
//findlast - 마지막 값 반환
//findIndex - 첫번째 값의 인덱스 반환
//findLastIndex - 마지막 값의 반환


const arr= [1,2,'삼',4,5,'육',7,8,9];

const isString = i => typeof i === 'string';
const isBoolean = i => typeof i === 'boolean';

console.log(
  arr.find(isString),
  arr.findLast(isString),
  arr.findIndex(isString),
  arr.findLastIndex(isString)
);

const arr10 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const isCheapFruit = i =>{
  return i.cat == '과일' && i.price < 3500;
}

console.log(
  arr10.find(isCheapFruit).name,
  arr10.findLast(isCheapFruit).name
)