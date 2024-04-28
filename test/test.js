function Rectangle(width, height){
  this.width = width;
  this.height = height;

  this.describe = function(){
    return `${this.width} * ${this.height} = ${this.width * this.height}`;
  }
}

const rectangle = new Rectangle(10,20);
console.log(rectangle.describe());

class Rectangle1{
  static thickness = 2;

  constructor(width,height){
    this.width = width;
    this.height = height;
  }

  describe() {
    return `${this.width} * ${this.height} = ${this.width * this.height}`;
  }
}

const rectangle1 = new Rectangle1(20,20);
console.log(rectangle1);
console.log(rectangle1.describe());

class Rectangle2{
  #width = 0;
  #height = 0;
  constructor(width, height){
    this.#width = width;
    this.#height = height;
  }

  get width(){
    return this.#width;
  }

  set width(newWidth){
    if(newWidth > 0) this.#width = newWidth;
  }

  get height(){
    return this.#height;
  }

  set height(newheight){
    if(newheight > 0) this.#height = newheight;
  }

  describe(){
    return `${this.#width} * ${this.#height} = ${this.#width * this.#height}`;
  }
}

const rectangle2 = new Rectangle2(10, 10);
console.log(rectangle2);
console.log(rectangle2.height());
console.log(rectangle2.width());
console.log(rectangle2.describe());