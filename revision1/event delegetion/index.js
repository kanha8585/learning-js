let btns = document.querySelectorAll("button")
let parent= document.querySelector(".wrapper")

  btns.forEach((btn) => {
    btn.addEventListener("click", (e)=>{ 

        console.log(e.target)
       e.target.style.backgroundColor = "white"
       e.target.style.color = "black"
    });
});
parent.addEventListener("click",(e)=>{
if(e.target.tagName === "BUTTON"){
    e.target.style.backgroundColor = "white"
    e.target.style.color = "black"
    document.body.style.backgroundColor = e.target.innerText
};
});



