const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('FR', 'France')

// for (const key in map) {
//     console.log(key);
    
// } // map is not interatable