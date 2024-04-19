//isArray -> 배열인지 확인하는 것
console.log(
  Array.isArray([1,2,3]),
  Array.isArray('123'),
  Array.isArray('123'.split(''))
  //split() 구분자, ()괄호 안에 구분할 것을 지정해주는 것
)

//at - ()괄호 안에 주어진 인자를 인덱스 값으로 반환
const arr = [
  '하나', '둘', '셋', '넷', '다섯'
]
console.log(
  arr.at(1), arr.at(-2)
)

//includes - 인자로 주어진 요소 유무 확인

const arr3 = [1,2,3,'abc',true];

console.log(
  arr3.includes(2),
  arr3.includes('abc'),
  arr3.includes(true)
)

//indexof, lastIndexOf -> 앞/뒤에서 첫번째 값의 인덱스를 반환

const arr4 = [1,3,2,2,4,3,1,4,3,2];
console.log(
  arr4.indexOf(1),
  arr4.indexOf(4),
  arr4.lastIndexOf(4)
)

//join -> 인자로 주어진 값으로 구분하여 요소들을 문자열로 반환
const arr5 = ['a','b','c','d','e'];
console.log(
  arr5.join(),
  arr5.join(','),
  //()빈 값은 기본적으로 ,으로 구분하여 문자열로 반환한다. 
  arr5.join(' '),
  arr5.join(":")
)

console.log(
  classIntro(3, '김민지', '영희', '철수', '보라')
); // 호이스팅

function classIntro (classNo, teacher, ...children) {


  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}