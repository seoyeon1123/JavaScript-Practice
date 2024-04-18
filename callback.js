const arr = [1,2,3,4,5];

arr.forEach(
  item => {console.log(item)}
);

const arr1 = [10,20,30,40,50];
arr1.forEach((item,idx) =>
  console.log(`${idx+1} : ${item}`)
)

//map 각 요소를 주어진 콜백 함수로 처리한 후, 새로운 배열로 반환해줌

const orgArr = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 2500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

const arr3 = orgArr.map(({name, cat})=>{
  return {name, cat}
});

console.log(arr3);

const arr4 = orgArr.map(({name, cat})=>{
  return `${cat} : ${name}`
})

console.log(arr4);

const arr5 = orgArr.map(({name, cat,price},idx)=>{
  return `${idx+1} : [${cat[0]}] ${name}: ${price}`
})

console.log(arr5);