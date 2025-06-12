// what is callback?
//note: callback is a function, which passes to another function as an argument.

function add(){
    // console.log("welcome to your website")
}

function greet(callback){
    // console.log("welcome to your website")
    callback()
}

// greet(add)


// -----------------------------------------------setInterval and settimeout----------------

setTimeout(()=>{
    // console.log("welcome to you page")
},2000)



let count = 0

let intervalID = setInterval(()=>{
    let date = new Date()
    console.log(date.toLocaleTimeString())
    count ++
    console.log(count)
    if(count === 60){
        clearInterval(intervalID)
    }
},2000) 

