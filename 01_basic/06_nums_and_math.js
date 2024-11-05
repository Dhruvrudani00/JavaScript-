const score = 400; // its directly define that score is number

// console.log (score)

const balance = new Number(100); // its specifically define that belance is number

// console.log (balance)

// console.l    og (balance.toString().length)
// console.log (balance.toFixed(2))

const otherNumber = 123.8945;

// console.log (otherNumber.toPrecision(4))

const hundreds = 1000000;
// console.log (hundreds.toLocaleString('en-IN'))

// ******************************* Math *******************************

// console.log (Math)
// console.log (Math.abs(-4))
// console.log (Math.round(4.8))

// console.log(Math.random());
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) )+ min);
