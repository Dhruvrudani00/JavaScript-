function setUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const coffee = new createUser("coffee", "coffee@fb.com", "123");
console.log(coffee);
69;
