const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const coffee = {
  name: "espresso coffee",
  price: 300,
  isAvailable: true,
  orderCoffee: function () {
    console.log("Coffee is not available");
  },
};

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, "name", {
  //   writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (let [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
