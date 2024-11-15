let a = 300
if(true){
    
    let a = 10
    const b = 10
    // console.log('Inner:', a);
    
}


// console.log(a);
// console.log(b);

function one() {

    const username = 'Dhurv'

    function two(){
        const website = 'youtube'
        console.log(username);
        
    }
    // console.log(website); // parent function canot access child value
    two()
    
}

// one()

if (true){
    const username = 'hitesh'
    if(username === 'hitesh'){
        const website= ' youtube'
        // console.log(username+website);
        
    }
    // console.log(website); // parent function canot access child value
    
}
// console.log(username);

 
 console.log(addone(5));

function addone(num){
    return num+1

}


const  addTwo = function(num){
    return num+2
}
addTwo(5)
