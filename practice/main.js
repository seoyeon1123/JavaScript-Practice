import { x,y } from './modul1.js';

import { add, mult} from './modul2.js'

import { Eagle } from 
'./modul3.js'

console.log(
  add(x,y), mult(x,y)
);

const eagle = new Eagle('독돌이', '푸드덕', '멍멍이');
eagle.hunt();

import * as funcs from './modul4.js';

console.log(funcs);

funcs.logResult(
  [1,2,3,4,5,6,7,8,9]
  .filter(funcs.isOdd)
  .map(funcs.square)
  .join(',')
)

// const raceResults = await fetch(
//   'https://showcases.yalco.kr/javascript/mockserver/race-result'
// )
// .then(response => response.json())

// console.log(raceResults);
