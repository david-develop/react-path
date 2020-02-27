// JavaScript ES5 function
function getGreetingFunc () {
  return 'Welcome to JavaScript';
}

// JavaScript ES6 arrow function with body
const getGreetingArrow1 = () => {
  return 'Welcome to JavaScript';
};

// JavaScript ES6 arrow function without body and implicit return
const getGreetingArrow2 = () =>
  'Welcome to JavaScript';

console.log(getGreetingFunc());
console.log(getGreetingArrow1());
console.log(getGreetingArrow2());
