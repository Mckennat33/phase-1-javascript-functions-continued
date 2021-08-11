// Define a function using a function declaration
// Define hoisting
// Define function expression
// Define anonymous function
// Define a function using a function expression
// Define an IIFE: Immediately-Invoked Function Expression
// Define function-level scope
// Define scope chain
// Define closure



function saturdayFun(value1="roller-skate") {
    return `This Saturday, I want to ${value1}!`; 
}


function mondayWork(value='go to the office') {
    return `This Monday, I will ${value}.`; 
}




function wrapAdjective(value1="*") {
    return function(value2="special") {
        return `You are ${value1}${value2}${value1}!`;
    } 
} 
wrapAdjective()(); 









//Function level scop 
// Function level scope - Function defined in another function 
// Inner function has all the access to the parameters in the outer function 

// function outer(greeting, msg="It's a fine day to learn") {
//     return function(name, lang="Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     }
//   }
//   
//   outer("Hello")("student", "JavaScript")
//   //=> "Hello, student! It's a fine day to learn JavaScript"




// Closure 



// scope chain 

// scope chain allows functions inside of functions to access their parents variables 