// if

// const isUserloggedIn = true
// const temperature = 41


// if(temperature===40){
//     console.log("less than 50");
// } else {

//     console.log('Temperature is greater than 50');
// }
// console.log('executed');


// const score = 200
// if(score>100){
//     const power = 'fly'
//     console.log(`User power ${power}`);
    
// }
// console.log(`User power ${power}`);

// const balance= 1000 

// if (balance > 500) console.log("test"); // this is only for example it is not good habit for coding.

// if (balance < 500) {
//     console.log('Less than 500');
    
// } else if (balance<750) {
    
//     console.log('Less than 750');
// } else if (balance < 900){
//     console.log('Less than 900');
    
// }else {
//     console.log('Less than 1200');
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard &&  2==3) {
    console.log('Allow to buy courses');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User logged in');
    
}