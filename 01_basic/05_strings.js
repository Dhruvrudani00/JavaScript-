const name = "Dhruv"
const repoCount = 20
// console.log (name + repoCount + " value")

// console.log (`Hello my name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String ('Dhruv-hr')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); // at 3rd position which character is located
// console.log(gameName.indexOf('u')); // at which position u is located

const newString = gameName.substring(0, 4) // print character from 0 position to 3 position because last number character does not print

// console.log (newString)
const anotherString = gameName.slice(-7, 4) // print character from 1 position to 3 position because last number character does not print also slice cannot print 0 position caharacter bacause position starts from negative position
// console.log (anotherString)

const anotherStringOne = "    Dhruv    "
// console.log (anotherStringOne)
// console.log (anotherStringOne.trim())

const url = "https://dhruv.com//dhruv%20rudani"

console.log (url.replace ('%', '-')) 
console.log (url.includes ('dhruv')) // check that word is include in variable value

console.log (gameName.split ('-'))