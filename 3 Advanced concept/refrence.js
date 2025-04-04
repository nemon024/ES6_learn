let student = {
  rollNo: 43,
  name: 'Piyush',
  course: 'Computer science'
};

let num1 = 10;
let num2= num1;

let student2=student

console.log(num2);
console.log(student2);
num1 = 15;
// there will be no change in num2 bcz it made a copy of num1 early
delete student.name;
console.log(num2);
console.log(student2);
// but same will nahi hoga object studen2 ma waha copy nahi ek object ko reference de raha hai



