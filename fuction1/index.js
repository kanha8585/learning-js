

// function in javascript

// a javascript function is a block of code desgined to perform a particular task . 
// a javascript function is executed when "something" invokes it (Calls: it). 

// console.log(name)

let name = "kanha"

// A. * function declaration 
// * key: it can behoisted 
// console.log(greet ())
// *return is nccessary 

* function greet(){
    return " hello, welcome to javascript"
}

// * B function expression 
// * key : it can not be hoisted 
// * better for conditional scenario 
// * return is neccessary
// * work with this keyword 

// console.log(greet2())

let greet2 = function(){
    return " hello, welcome to our website"
}

// * C. arrow function 
// * key : it can not neccessary 
let greet3 = ()=>"(arrow function): hello, welcome to our website"
// console.log(greet3())



// -------------------------------------------------------------------------------------------
function greet4(){
    console.log( "hello, welcome to our website")
}

greet4()



// parameters in js :                when you are declaring a function, and giving some values.
function add(a, b){
    return a + b
}


let a = 2
let b = 4
console.log(add(a, b))            //aarguments in js, when you are calling the function and sending some values
         
          //  OR 
console.log(add(2, 4))  




// -----------------------------default parameter in js------------------------------------------

function multiply(a = 2, b = 4){
    return a * b
}
console.log(multiply())



function welcome(name, age){
         return `${name}, welcome to our  website. i think your age is ${age}.`
}

 
console.log(welcome("virat", 36))
  


