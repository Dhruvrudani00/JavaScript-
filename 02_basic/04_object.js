// const tinderUser = new Object() // singleton object
const tinderUser = {} //non singleton object

tinderUser.id = '123342'
tinderUser.name = 'Dhurv'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'Dhruvrudani00@gmail.com',
    fullname: {
        userfullname:{
            firstname:'Dhruv',
            lastname: 'Rudani'
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: 'a',
    2:'b'
}
const obj2 = {
    3:'c',
    4:'d'
}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email:'Dhruvrudani00@gmail.com'
    },
    {
        id:2,
        email:'sahildhanani@gmail.com'
    },
    {
        id:3,
        email:'smitkevadiya@gmail.com'
    }
]

console.log(user[1].email);
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

