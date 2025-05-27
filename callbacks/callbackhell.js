function loginuser(callback){
    setTimeout(()=>{
        console.log("user logged in")
        callback()
    },1000)
}

function fetchUser(callback){
    setTimeout(()=>{
        console.log("user data fetched")
        callback()
    },1000)
}

function UpdateUI(callback){
    setTimeout(()=>{
        console.log("user data update")
        callback()
    },1000)
}

function sendEmail(callback){
    setTimeout(()=>{
        console.log("Email sent")
    },1000)
}


// CALLBACK HELL:-----

// note: Callback hell  is a situation in JavaScript where deeply nested callback functions
//  make code difficult to read, understand, and maintain. This often occurs when handling
//  asynchronous operations where one operation's completion depends on the result of another



loginuser(()=>{
    fetchUser(()=>{
        UpdateUI(()=>{
            sendEmail(()=>{
                console.log("All task completed successfully")
            })
        })
    })
})


//----------------------------async task with promise (to avoid call back hell)---------------------------------


function loginuser1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user1 logged in")
            resolve()
        },1000)
    })
}


function fetchUser1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data fetched")
            resolve()
        },1000)
        
    })
}

function UpdateUI1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user data update")
            resolve()
        },1000)
    })
}


function sendEmail1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Email sent")
            resolve()
        },1000)
    })
}


// chaining operation

// loginUser1()
// .then(fetchUser1)
// .then(updateUI1)
// .then(sendEmail1)
// .catch((error) =>{
//   console.log(error)
// })


// promise with async await



async function  proccesData(){
    try{
        const logged = await loginuser1()
        const fetch = await fetchUser1()
        const update = await UpdateUI1()
        const final = await  sendEmail1()
        console.log("all data has been sent")
    }catch(error){
        console.log(error)
    }
}

proccesData()
    










