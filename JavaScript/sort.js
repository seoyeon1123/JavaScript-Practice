//sort -> 배열 정렬

const arr = ['라', '사', '다', '가', '바', '마', '나'];

arr.sort();

console.log(arr);
//기본적로 오름차순으로 정렬, 숫자인 경우, 문자열로 치환후 오름차순으로 정렬

const arr1 = [1,2,3,4,5,6,7,8,9];

console.log(
  arr1.sort((a, b) => a - b)
);

console.log(
  arr1.sort((a,b) => b - a)
)

const arr3 = ['F', 'E', 'I', 'A', 'H', 'C', 'D', 'J', 'G', 'B'];

console.log(
  arr3.sort((a,b) => a > b ? 1 : -1)
);

console.log(
  arr3.sort((a,b) => a<b ? 1 :-1)
)

const arr5 = [
  { name: '사과', cat: '과일', price: 3000 },
  { name: '오이', cat: '채소', price: 1500 },
  { name: '당근', cat: '채소', price: 2000 },
  { name: '살구', cat: '과일', price: 2500 },
  { name: '피망', cat: '채소', price: 3500 },
  { name: '딸기', cat: '과일', price: 5000 }
];

console.log(
  arr5
  .sort((a,b)=>{
    if(a.cat !== b.cat){
      return a.cat > b.cat ? 1 : -1 ;
    }

    return a.price > b.price ? 1 : -1;
  })
  .map(({name, cat, price}, idx)=> {
    return `${idx + 1} : [${cat[0]}] ${name} : ${price}원`
  })
)