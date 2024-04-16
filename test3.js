const arr = [1, 'text', 3.14, 5, { key: 'value' }, 6.28732, 7];

for(const item of arr){
  if(typeof item === 'number'){
    if(Number.isInteger(item)){
      console.log(`${item}은 정수입니다.`)
    }else{
      console.log(`${item.toFixed(2)}는 실수입니다.`)
    }
  }
}


function printLastChars(sentence){
  for(const word of sentence.split(' ')){
    console.log(word.at(-1))
  }
}
printLastChars("Hello world from JavaScript");


function findFirstCapital(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      console.log(str[i])
      return;
    }
    }
    console.log('대문자가 없습니다.');
}

// 활용예
findFirstCapital("helloWorld"); // W