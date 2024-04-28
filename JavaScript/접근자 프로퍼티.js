class PyoChicken{
  constructor(name, no){
    this.name = name;
    this.no = no;
  }

  get no(){
    return `${this._no} 호점`
  }

  set no(no){
    this._no = no;
  }
}

class Person{
  #name = ' ';
  #age = 0;
  #married = false;

  constructor(name, age, married){
    this.#name = name;
    this.#age = age;
    this.#married = married;
  }

  get name(){
    return `${this.#name[0]}모씨`
  }

  get age(){
    return this.#age - (this.#age % 10) + "대";
  }

  set age(age){
    if(typeof age === 'number' && age>0){
      this.#age = age;
    }
  }

  getOlder(years){
    this.#age += years; 

  }

}

const person1 = new Person("이서연", 25);
console.log(person1.name, person1.age);

person1.age = 35;
console.log(person1.age);