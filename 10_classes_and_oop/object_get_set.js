const user = {
  _email: "d@dr.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const coffee = Object.create(user);
console.log(coffee.email);
