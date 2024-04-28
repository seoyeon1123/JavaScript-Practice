class Animal{
  constructor(sex){
    this.sex = sex;
  }

  describe(){
    return `성별 : ${this.sex}`
  }
}

class Cat extends Animal{
  constructor(sex,breed){
    super(sex);
    this.breed = breed;
  }

  describe(){
    return `${this.breed} (${this.sex})`
  }
}

const myAnimal = new Animal('수컷');
myAnimal.describe();

const myCat = new Cat('암컷', '페르시안');
myCat.describe(); // 페르시안 (암컷)