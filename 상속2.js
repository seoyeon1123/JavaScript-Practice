class LeeChicken{
  menu = {
    '후라이드' : 10000, '양념' : 12000
  }

  constructor(name, no){
    this.name = name;
    this.no = no;
  }

  introduce() {
    return `안녕하세요. ${this.no}호 ${this.name} 점 입니다.`
  }

  order(name){
    return `${this.menu[name]}원 입니다.`
  }
}

class ConceptChicken extends LeeChicken{
  #word = ' ';
  constructor(name, no,word){
    super(name,no);
    this.#word = word
  }

  introduceConcept(){
    return super.introduce() + ' ' + this.#word;
  }

  orderConcept(){
    return super.order() + ' ' + this.#word;
  }
}

const pikaChicken = new ConceptChicken('삼성', 24, '삐가삐가~');
console.log(pikaChicken);
console.log(pikaChicken.introduce());
console.log(pikaChicken.order('양념'));
