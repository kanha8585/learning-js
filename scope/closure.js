// closure A closure in JavaScript is a function that remembers and has access to variables 
// from its outer (enclosing) function's scope, even after the outer function has finished executing

let btn = document.querySelector("button")
let resultEle = document.querySelector("p")


function likes(){
    let countingLikes =0;
    return function incr(){
        countingLikes++
        return countingLikes
    }
}

let likesResult = likes()
btn.addEventListener("click",()=>{
    resultEle.innerText=likesResult()
})