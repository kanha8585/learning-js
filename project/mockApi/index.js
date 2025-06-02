let form = document.querySelector("#create-account")
let firstNameInput = document.querySelector("#firstName")
let lastNameInput = document.querySelector("#lastName")
let emailInput = document.querySelector("#email")
let mobileInput = document.querySelector("#mobile")
let passwordInput = document.querySelector("#password")
let deleteData = document.querySelector(".delete-data")
let getData   = document.querySelector(".get-data")


let url = "https://683d3052199a0039e9e47581.mockapi.io/empolye"


function registerAccount(e) {
    e.preventDefault()
    let empolyee = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        mobile: mobileInput.value,
        password: passwordInput.value

    }

    fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empolyee)
    })
    .then((res) => {
        return res.json()

    })
    .then((Response) => {
            console.log(Response)
    })
     .catch((err) => {
            console.log(err)
        })
}

form.addEventListener("submit",registerAccount)


// ** fetchind data with get request

getData.addEventListener("click",()=>{
    fetch(url,)
    .then(res=> res.json())
    .then((Response)=>{
        console.log(Response)
    })
}) 



// ** Delete Data  mock API

//delete request
deleteData.addEventListener("click", ()=>{

    fetch("https://683d3052199a0039e9e47581.mockapi.io/empolye/3", {method: "DELETE"})
    .then(res => res.json())
    .then((response) => {
        console.log(response)
    })

})


