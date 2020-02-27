// If there is only one statement inside function body then you can omit return keyword as well the curly braces
// Omit the function keyword in the beginning
// You can also get rid of parameter parentheses if you only have one parameter

const students = [
  { ID: 1, present: true },
  { ID: 2, present: true },
  { ID: 3, present: false },
  { ID: 4, present: false },
  { ID: 5, present: true }
];

const presentStudents = students.filter(student => student.present);
presentStudents.forEach(student => console.log('Present student ID: ' + student.ID));
