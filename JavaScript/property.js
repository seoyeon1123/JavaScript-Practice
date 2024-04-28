const food2 = {}
console.log(food2);

food2.name = '샐러드';
food2.price = '12000';
food2['order'] = false;

console.log(food2);

food2.price = 6500;


const objkey = { x:1, y:2 };
const arrkey = [1,2,3,4];


const obj = {
	objkey : '객체를 키값으로',
  arrkey : '배열을 키값으로'
    };

console.log(
  obj['objkey'],
  obj['arrkey']
);

console.log(obj)