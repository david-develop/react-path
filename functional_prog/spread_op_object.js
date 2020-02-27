const person = { name: 'Jhon' };
const student = { ID: '21', GPA: '3.0' };

const newObject = { ...person, ...student, semester: '3' };
console.log(newObject);
