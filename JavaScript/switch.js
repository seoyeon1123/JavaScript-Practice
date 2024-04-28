const fingerOut = 2;

switch (fingerOut) {
  case 2:
    console.log("가위");
    break;

  case 5:
    console.log("바위");
    break;

  case 0:
    console.log("보");
    break;

  default:
    console.log("다시 내주세요.");

};

const direction = 'north';
let directionKor;

switch (direction) {
  case 'north':
    directionKor = '북';
    break;

  case 'south':
    directionKor = '남';
    break;

  case 'east':
    directionKor = '동';
    break;

  case 'west':
    directionKor = '서';
    break;

  default:
    console.log("잘못 입력하셨습니다.")
}

console.log(directionKor);

const month = 8;
let season = " ";

switch (month) {
  case 1: case 2: case 3:
    season = "1분기";
    break;

  case 4: case 5: case 6:
    season = "2분기";
    break;

  case 7: case 8: case 9:
    season = "3분기";
    break;

  case 10: case 11: case 12:
    season = "4분기";
    break;

    default :
    console.log("월을 잘못 입력하셨습니다.")
}
console.log(season);