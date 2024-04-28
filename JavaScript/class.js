class PyoChicken{

  static brand = '표치킨';
  static contact(){
    return `안녕하세요. ${this.brand}입니다. 무엇을 도와드릴까요?`
  }

  constructor(name, no){
    this.name = name;
    this.no = no;
  }

  introduce(){
    return `안녕하세요. ${this.no}호 ${this.name}점 입니다.`
  }

  order(name){
    return `${this.menu[name]}원 입니다`
  }
}
const chain1 = new PyoChicken('판교', 3);
console.log(PyoChicken.contact())

class Person {
  constructor(name,age,married=false){
    this.name = name;
    this.age= age;
    this.married= married;
  }
}

const person1 = new Person('서연',25);
const person2 = new Person('태구', 55,true);

class Dog {
  bark () {
    return '멍멍';
  }
}

console.log(typeof Dog);


