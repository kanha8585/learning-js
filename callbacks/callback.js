// 🔸 What is a Callback?
// A callback is a function passed as an argument to another function.
//  It is called after the first function finishes its task.


// 🔸 Why use Callbacks?
// To handle asynchronous operations, like:


// API requests 
// Reading files 
// Timers (setTimeout, setInterval)


// **basic callback

function greet(name, cb){
    console.log(`hello ${name}, welcome to our website`)
    cb()
}

function goodBye(){
    console.log("good bye friend")
}

greet("anil", goodBye)

function sum(a,b, cb){
    console.log(`your sum is`,a+b)
    cb()

}

function done(){
    console.log("done with the sum")
    
}

sum(5,10, done)



//-------------------------------------callback with async task (setTimeout)-------------------------------


setTimeout(()=>{
    console.log("set timeout is working")
},1000)


//   **OR 

function greet1(){
    console.log("hello, welcome to our website")
}

setTimeout(greet1,2000)

