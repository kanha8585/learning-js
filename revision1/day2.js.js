//  console.log(name)

 var name = "aakash"
 var lastName = "kuldeep"


 
// console.log(age)                      
let age = 23                             //note: it will give you an error 
let mobile = 4885885
const email = "kanha@gmail.com"

// console.log(age)                         // It will give your value

// --------------------------------------------------2nd exercie----------------------------------------------

phone = 137474774; 
// console.log(phone)                   // it will work, and you will get the output
var phone;
// console.log(phone) 

// phone2 = 58588585
// console.log(phone2)                   //you will get an error at this stage, bacause you are initialaizing let variable                                  // after assigning the let variable                
let phone2;

// /------------------------------------------------exercise three with function hoisting=-------------------

// console.log(greet())
// function declartion is the only function which is getting hoisted in global execution context
function greet(){
    let output = 2+2
    return `welcome to our website. outpur of two plus two = ${output} `
}

// console.log(greet())




// console.log(greet2())                       // NOTE: you will get an error

let greet2 = () =>{
    return "welcome to our website"
}

// ** function in javascript
// ** A JavaScript function is a block of code designed to perform a particular task.
// ** A JavaScript function is executed when "something" invokes it (calls

// A. function declartion                    its work on hoisting
// console.log(sum(7, 9))
function sum(a, b){
   return a + b
}

// B. function expression                 **  this keyword word work with function expression
let expressionFun = function(a, b){
    return a + b
} 
console.log(expressionFun(4, 5))

 
//C. ARROW FUNCTION                        ** most cases you will use for callbacks
let arrowFunction = (a, b) =>{
     console.log(a+b)
}

arrowFunction(10, 20)


// RETURN IN Function
function mul(a, b){
    console.log("hi welcome")
    let result = a * b;
    let message = `your two digit multiplication result is =  ${result}`
    
    return message
}

console.log(mul(100, 35))

