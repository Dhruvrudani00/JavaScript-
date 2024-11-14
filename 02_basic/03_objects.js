//singleton

//object literals

const mySym = Symbol('key1')
const jsUser = {
    name : 'Dhruv',
    [mySym] : 'mykey1',
    age : 21,
    location : 'Surat',
    email : 'dhruvrudani00@gmail.com',
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Saturday']

}

// console.log(jsUser.email);
// console.log(jsUser['email']); // if we use squre notaion than we have to declare object variable into coma.
// console.log(jsUser[mySym]);

jsUser.email = 'dhruvrudani007@gmail.com'
// Object.freeze(jsUser)
jsUser.email = 'dhruvrudani02@gmail.com'
// console.log(jsUser);

jsUser.greeting = function(){
    console.log('Hello JsUser');
    
}
jsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
