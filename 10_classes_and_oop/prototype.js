let myName = "Dhruv      ";

// console.log(myName.trueLenght);

let myHeros = ["Thor", "Iron Man"];

let heroPower = {
  thor: "Hammer",
  ironman: "Iron Suite",

  getIronPower: function () {
    console.log(`Iron Man power is ${this.ironman}`);
  },
};

Object.prototype.dhruv = function () {
  console.log(`Dhruv is present in all objects`);
};

Array.prototype.heyDhruv = function () {
  console.log(`Dhruv says Hello`);
};
// heroPower.dhruv();
// myHeros.dhruv();
// myHeros.heyDhruv();
// heroPower.heyDhruv();

const user = {
  name: "Coffee",
  email: "google@gmail.com",
};
const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASuppoer = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "CoffeeAurCode    ";

String.prototype.trueLenght = function () {
  console.log(`${this}`);
  console.log(`True lenght is ${this.trim().length}`);
};

anotherUsername.trueLenght();
"Dhurv".trueLenght();
"coldCoffee".trueLenght();
