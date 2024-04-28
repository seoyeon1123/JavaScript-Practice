let person = {
	name : '표원식',
    age : 27,
    married : false,
    introduce : function(foma1){
    return foma1 ? 
'저는 표원식 이라고 합니다.' 
: '나는 원식표~';
	}
}

console.log(person.introduce(true));
console.log(person.introduce(false));

let arithemtics = [
	(a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
    (a, b) => a / b
    ];
    
for(arm of arithemtics){
console.log(arm(10,3));
}

let person1 = {
  name : '이서연',
  age : 25,
  married : false,
  introduce : function(){
  return `안녕하세요. 저의 이름은 ${this.name} 이고, 나이는 ${this.age}살 이며, ${this.married ? '기혼' : '미혼'} 입니다.`
}
  }
  
  console.log(person1.introduce());
  