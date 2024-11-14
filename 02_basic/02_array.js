const marvel_heros = ['Thor', 'Black Panther', 'IronMan']
const dc_heros = ['Superman', 'Flash', 'Batman']

// marvel_heros.push(dc_heros) // it can add array inside array

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros] // it can combine two array into one array.
// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // it can combine array inside array and convert into one array.
console.log(real_another_array);

console.log(Array.isArray("Dhruv"));
console.log(Array.from("Dhruv")); // it can convert string to the array.
console.log(Array.from({name: 'Dhruv'})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
