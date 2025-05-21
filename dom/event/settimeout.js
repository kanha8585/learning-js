
let start = document.querySelector("start")
let stop = document.querySelector("stop")


//  * setInterval, setTimeout

function username(){
    return "kanha"

}


// A :---
// setInterval(() =>{
//     console.log(username())
// },1000)



 // B:--
// let intervalId; 

// start.addEventListener("click", ()=>{
//      intervalId = setInterval(() => {

//     let date = new Date() 
//     document.querySelector("p").innerHTML = date.toLocaleTimeString() 
// }, 1000)
  
// });  



//  OR 

// defining interval funciton in a variable

function runningtime(){
    intervalId = setInterval(()=>{
        let date = new date()
        document.querySelector("p").innerHTML = date.toLocaleTimeString()
    },1000)
}


// //adding event to start button
start.addEventListener("click", runningTime); 
stop.addEventListener("click", () =>{
     clearInterval(intervalId)
})

let time = 10000
//setTimeout:
let timeOutID = setTimeout(() =>{ 
    document.querySelector("h5").style.display = "flex" 
}, time)
 
let name = "ganshyam"




