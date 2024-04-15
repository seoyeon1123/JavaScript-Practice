function introduce(name, age, job, married){
  console.log(
    `저의 이름은 ${name}이고, 
    나이는 ${age}살입니다.
    직업은 ${job}이며, 
    결혼은 ${married ? '기혼' : '미혼'}입니다.`
  );
}

introduce('이서연', 25, '백수', false);


function introduce1(person){
  console.log(`저의 이름은 ${person.name}이고, 
  나이는 ${person.age}살입니다.
  직업은 ${person.job}이며, 
  결혼은 ${person.married ? '기혼' : '미혼'}입니다.`)
}

const person1 = {
  name : '이서연',
  age : 25,
  job : '개발자',
  married : false
}

introduce1(person1);

function introduce2({name, age,job, married}){
  console.log(`저의 이름은 ${name}이고, 
  나이는 ${age}살입니다.
  직업은 ${job}이며, 
  결혼은 ${married ? '기혼' : '미혼'}입니다.`)
}

const person2 = {
  name : '이서연',
  age : 25,
  job : '개발자',
  married : false
}

introduce1(person1);