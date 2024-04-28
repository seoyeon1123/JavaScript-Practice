class Bird {
  wings = 2;
}

class Eagle extends Bird{
  claws = 2;
}

class Pengiun extends Bird{
  swin(){
    '펭귄은 현재 수영중 ...'
  }
}

class EmperorPengiun extends Pengiun{
  size = 'XXXL'
}

const bird = new Bird();
const eagle = new Eagle();
const pengiun = new Pengiun();
const emPengiun = new EmperorPengiun();

console.log(bird, eagle, pengiun, emPengiun);

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

class LeeCafe extends LeeChicken {
  cafeMenu = {
    '아메리카노': 3000, '라떼': 4000
  }

  cafeOrder(name) {
    return `${this.cafeMenu[name]}원 입니다.`;
  }
}

const cafeChain1 = new LeeCafe('김포', 12);
console.log(cafeChain1.cafeOrder('라떼')); 



class CatChicken extends LeeChicken {
  introduce() {
    return `${this.name}점에는 왜왔냐능!`;
  }

  order(name) {
    return `${this.menu[name]}원 이라능!`;
  }
}

const catChain = new CatChicken('전주', 10);
console.log(catChain); // 출력: CatChicken { menu: { 후라이드: 10000, 양념: 12000 }, name: '전주', no: 10 }
console.log(catChain.introduce()); // 출력: "전주점에는 왜왔냐능!"
console.log(catChain.order('후라이드')); // 출력: "10000원 이라능!"

