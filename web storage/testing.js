//local storage: With web storage, applications can store data locally within the user's browser.
//Note: it takes data only in json format

let fristname = "kanha"
let age = 22

let profile = {
    name: "kanha"
    // course: "fullstack"
     
     
     
}


let objToString = JSON.stringify(profile)

//** save items in localestorage
localStorage.setItem("fristName","kanha")
localStorage.setItem("lastName","pareek")                // **set item in localestorage

localStorage.setItem("userProfile",objToString)




//get items from localstorage
// console.log(localStorage.getItem("fristName"))
let stringToObj = JSON.parse(localStorage.getItem("userProfile"))
console.log(stringToObj)



localStorage.removeItem("lastName")
localStorage.removeItem("userProfile")   // ** remove item from local storage

localStorage.clear()                    // ** clear all item from local storage

