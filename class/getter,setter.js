class IdolModel{
  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  get nameAndYear(){
    return `${this.name}-${this.year}`
  }

  set setName(name){
    this.name = name;
  }
}

const seoyeon = new IdolModel('이서연', 2000);

console.log(seoyeon.nameAndYear);

seoyeon.setName = '표원식';

console.log(seoyeon);


class IdolModel2 {
  #name;
  year;

  constructor(name, year){
    this.#name = name;
    this.year = year;
  }

  get setName(){
    return this.#name;
  }
} 

const wonsik = new IdolModel2('표원식', 1998);
console.log(wonsik);

console.log(wonsik.setName)