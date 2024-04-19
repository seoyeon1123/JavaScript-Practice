class IdolModel{

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  sayName(){
    return `안녕하세요 저의 이름은 ${this.name} 입니다. `
  }
}
const seoyeon = new IdolModel('이서연',2000);
console.log(seoyeon, seoyeon.sayName());

const wonsik = new IdolModel('표원식', 1998);
console.log(wonsik);

console.log(typeof IdolModel);
