const a = [1, 2, 3];
const b = [4, 5, 6];

// standard concat
let c = a.concat(b);
console.log('c: ' + c);

// spread operator
c = [...a, ...b];
console.log('c: ' + c);
