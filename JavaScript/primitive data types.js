let x;
x ?? console.warn(x, 'x에 값이 없습니다.');

x = 0;
x ?? console.warn(x, 'x에 값이 없습니다.');

x = null;
x ?? console.warn(x, 'x에 값이 없습니다.');

let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
  a ?? '기본값',
  b ?? '기본값',
  c ?? '기본값',
  d ?? '기본값',
  e ?? '기본값',
);

let x1 = 0;
let y = '';
let z = null;

x1 ||= 100;
y &&= '있어야 바뀜';
z ??= '기본값';

console.log(x1, y, z);