
function sayMyName(){
    console.log('D');
    console.log('h');
    console.log('r');
    console.log('u');
    console.log('v');
}

// sayMyName()

// function addTwoNumbers(number1, number2){
    
//     console.log(number1+number2);

// } 

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
    // console.log('Dhruv'); // after return log will not be excecuted
    
    return number1 + number2
} 

const result = addTwoNumbers(3,5)

// console.log('Result:',result);

function loginUserMessage(username){
    if(!username){
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

// console.log (loginUserMessage('Dhruv'))
console.log (loginUserMessage())