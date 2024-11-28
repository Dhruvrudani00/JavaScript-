class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const coffee = new teacher("coffee", "coffee@gmail.com", "123");
coffee.addCourses();

const coldCoffee = new User("ColdCoffee");

coldCoffee.logMe();

console.log(coffee instanceof teacher);
