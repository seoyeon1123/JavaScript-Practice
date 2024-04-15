const class1 = {
  x: 1, y: 'A', z: true
};

const class2 = { ...class1 };

// 아래의 참조복사 코드와 다름!
// const class2 = class1;

console.log(class2);

