const student = {
  ID: '21',
  name: 'Jhon',
  GPA: '3.0'
};

// rest destructuring
const { ID, ...rest } = student;
console.log(ID);
console.log(rest);

// destructuring
const { name, GPA } = student;
console.log(name);
console.log(GPA);

// destructuring using alias
const { name: n, ID: i, GPA: g } = student;
console.log(n);
console.log(i);
console.log(g);
