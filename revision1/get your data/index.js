import studentData from "./data.js";

let input = document.querySelector("input")
let btn = document.querySelector("button")
let nameEle = document.querySelector("#name")
let ageELe = document.querySelector("#age")
let mobileEle = document.querySelector("#mobile")
let hindiEle = document.querySelector("#hindi")
let EnglishEle = document.querySelector("#english")
let MathEle = document.querySelector("#math")
let SanskritEle = document.querySelector("#sanskrit")
let ScienceEle = document.querySelector("#science")
let SocialScienceEle = document.querySelector("#socialscience")
let villageEle = document.querySelector("#village")
let scoreEle = document.querySelector("#score")
let resultEle = document.querySelector(".result")

btn.addEventListener("click", () => {
    // console.log(input.value.trim())
    let allnames = studentData.map((student) => {
        return student.name
    })
    // console.log(allnames)
    if (!allnames.includes(input.value)) {
        alert("User not found")
        input.value = ""
        return
    }

    let filterdata = studentData.filter((student) => {
        return student.name === input.value
    })
    console.log(filterdata)
     document.querySelectorAll("p").forEach((para)=>{
       para.style.display= "flex"
     
     })

    nameEle.innerHTML =`Name:<span> ${filterdata[0].name}</span>`
    ageELe.innerHTML = `Age:<span>  ${filterdata[0].age}</span>`
    mobileEle.innerHTML=`Mobile:<span> ${filterdata[0].mobile}</span>`
    hindiEle.innerHTML=`Hindi:<span> ${filterdata[0].Hindi}</span>`
    EnglishEle.innerHTML=`English:<span> ${filterdata[0].English}</span>`
    MathEle.innerHTML=`Math:<span> ${filterdata[0].Math}</span>`
    SanskritEle.innerHTML=`Sanskrit:<span> ${filterdata[0].Sanskrit}</span>`
    ScienceEle.innerHTML=`Science:<span> ${filterdata[0].Science}</span>`
    SocialScienceEle.innerHTML=`SocialScience:<span> ${filterdata[0].SocialScience}</span>`
    villageEle.innerHTML=`Village:<span> ${filterdata[0].village}</span>`
    scoreEle.innerHTML=`Score:<span> ${filterdata[0].score}%</span>`

    input.value=""
     

})





