function classIntro (classNo, teacher, ...children) {
  return `${classNo}반의 선생님은 ${teacher}, `
    + `학생들은 ${children.join(', ')}입니다.`
}

const classNo = 3;
const teacher = '김민지';
const students = ['영희', '철수', '보라', '돌준', '달숙'];

console.log(
  classIntro(classNo, teacher, ...students)
);

console.log(
  classIntro(classNo, teacher, students)
);