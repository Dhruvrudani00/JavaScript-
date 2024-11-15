const user = {
    username: 'Dhurv',
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`);        
    
        console.log(this);
        
    }
        
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'Dhurv'
//     console.log(this.username);
    
// }
// chai()

const chai =  () => {
    let username = 'Dhurv'
    console.log(this);
    
}

// chai()

// () => {} // syntext of arrow function

// const addTwo = (num1,num2) => {
//     return num1 + num2
// } // if we use curly bresis than we have to write return
// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2) // if we use perenthesis then we cannot write return
const addTwo = (num1,num2) => ({username:'Dhruv'})



console.log( addTwo(10,50));

const myArray = [2,5,3,7,8]

// myArray.forEach()
