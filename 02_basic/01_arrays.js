//Arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ['IronMan','Thor']
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// Array methods

// myArr.push(6) // add element into the array
// myArr.push(7)
// myArr.pop() // remove last elemtn in the array

// myArr.unshift(9) // this operation add element into array at the first position
// myArr.shift() // this operation remove element that was add by unshift operation

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // join function convert array into string

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);


const myn1= myArr.slice(1,3) // slice can print array element from 1-2 is cannot print last element.
console.log("B ", myArr);
console.log(myn1);

const myn2= myArr.splice(1,3) // splice can print element from main array means if we do splice operation than that values are remove from the main array than print thta value.
console.log("C ", myArr);
console.log(myn2);
