export class Bird {
  constructor(name, sound){
    this.name = name;
    this.sound = sound;
  }

  fly(){
    console.log(
      `${this.name} ${this.sound} 비행중`
    )
  }
}

export class Eagle extends Bird {
  constructor(name, sound, pray) {
    super(name, sound);
    this.pray = pray;
  }

  hunt() {
    console.log(`${this.name} ${this.pray} 사냥중`);
  }
}