import{x,y} from './module1.js'

import{add, subt} from './module2.js'
console.log(add(x,y), subt(x,y));

import { Eagle } from './module3.js';
const eagle = new Eagle('독독이', '푸드덕', '개미');
eagle.hunt();


import * as funcs from './module4.js';

funcs.logResult(
  [1,2,3,4,5,6,7,8,9,10]
  .filter(funcs.isOdd)
  .map(funcs.square)
  .join(',')
)


const raceResults = await fetch(
  'https://showcases.yalco.kr/javascript/mockserver/race-result'
)
.then(response => response.json())

console.log(raceResults);


import Big from './big.mjs';

console.log(Big);

console.log(
  0.1 + 0.2,
  new Big(0.1).plus(0.2).toNumber()
);

console.log(
  0.2 * 0.7,
  new Big(0.2).times(0.7).toNumber(),
);

console.log(
  0.9 - 0.6,
  new Big(0.9).minus(0.6).toNumber()
);