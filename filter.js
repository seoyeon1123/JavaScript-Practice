//filter -> 주어진 기준을 충족하는 요소들로 새 배열을 만들어서 반환
const arr = [1,2,3,4,5,6,7,8,9];

const odds = arr.filter( i => i%2 ==0);
const evens = arr.filter(i => !(i%2 ==0));
const largerThan3 = arr.filter(i => i>3);

console.log(odds);
console.log(evens);
console.log(largerThan3);

const arr1 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

console.log(
  '과일 목록\n' ,
  arr1.filter(({cat})=> cat =='과일')
  .map(({name, price})=> `${name} : ${price}`)
  .join(', \n')
);

//reduce, reduceRight -> 주어진 콜백함수에 따라 값을 접어 나간다

const arr3 = [1,2,3,4,5,6,7,8,9];

console.log(
  arr3.reduce((prev,curr,idx) => {
    console.log(`i:${idx}, p: ${prev}, c: ${curr}`);
    return prev + curr;
  })
)

const arr5 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

['과일','채소'].forEach(ctg=>{
  console.log(
    `${ctg}의 가격의 합 : `,
    arr5.filter(({cat})=> cat == ctg)
    .map(({price}) => price)
    .reduce ((prev, curr) => prev + curr)
  )
});

