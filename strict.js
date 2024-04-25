x = 2;
console.log(x);

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  getInfo: function () {
    return `${this.brand} ${this.model}`;
  }
};

const cars = [
  { brand: 'Ford', model: 'Focus' },
  { brand: 'Honda', model: 'Civic' },
  { brand: 'Chevrolet', model: 'Malibu' }
];

cars.forEach(function (carInfo) {
  console.log(this.getInfo.call(carInfo)); // 각 객체의 정보를 호출하여 출력
}, car);


function recommendForYou (me) {
  const products = [
    { sex: 'F', size: 'M' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'M' },
    { sex: 'U', size: 'S' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'S' },
  ];

  products
  .map((itm, idx) => {
    return { ...itm, idx } 
  })

  // ⚠️ 화살표 함수 대신 function 선언 함수 사용 주목
  .filter(function ({sex, size}) {
    return ['U', this.sex].includes(sex)
    && size === this.size
  }, me) // 💡 thisArg

  .forEach(function ({idx}) {
    console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
  }, me); // 💡 thisArg
}