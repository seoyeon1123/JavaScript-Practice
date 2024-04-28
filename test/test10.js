//  예시

const array = [
  '모', '걸', '도', '개', '윷',
  '윷', '걸', '모', '개', '도',
  '윷', '모', '걸', '도', '개',
  '윷', '모', '걸', '개', '도'
];

const yuts = [ ...new Set(array) ]
.toSorted()
.join(', ')

console.log(yuts);

//  예시

const array1 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countMap = new Map();

array.forEach(item => {
  countMap.set(item, (countMap.get(item) || 0) + 1);
});

console.log(countMap.get('apple'));