class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const dhurv = new User("Dhurv");
// console.log(dhurv.createId());

class teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new teacher("iphone", "iphone@gmail.com");
iphone.logMe();
