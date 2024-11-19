//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})(); // named IIFE

( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
    
})('Dhruv') // unnamed IIFE 