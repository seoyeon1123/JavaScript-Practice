let str1 = 'ABCDE';

console.log(str1,
    str1.length,
    str1[2], 
    str1[str1.length-1])

for(const letter of str1){
  console.log(letter)
}

const sentence = new String('Hello my name is LeeSeoYeon');
console.log(sentence.toUpperCase(), sentence.toLowerCase());

function SameWord(str1, str2){
  return str1.toUpperCase() === str2.toUpperCase();
}

console.log(SameWord('abc','ABC'));
console.log(SameWord('가나다','가나다'));
console.log(SameWord('ABC','ABC'));
console.log(SameWord('abc','cde'));





const sentence1 = '오늘은 화요일 스타벅스에 사람이 많이 없다.';

for(const word of ['오늘은','스타벅스','많이','없다.']){
  console.log(sentence1.includes(word));
  console.log(sentence1.startsWith(word));
  console.log(sentence1.endsWith(word));
}

