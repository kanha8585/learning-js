//  let slider = document.querySelector('.img')
//  let prev = document.querySelector('.prev')
//  let next = document.querySelector('.next')
//  let allimage = document.querySelector('.img')
 
 
//  let currentpx = 0;
//  next.addEventListener("click",()=>{
//     if(currentPx === (allimage.length-1)*400){
//         currentpx = 0
//         slider.style.left =`-${currentPx}px`
//         return
//     }

//     currentpx += 400
//     slider.style.left = `-${currentPx}px`
//     console.log(currentpx)
//  })

//  prev.addEventListener("click",()=>{
//     if(currentPx === 0){
//         alert("This is first image")
        
//     }

//     else{
//         currentPx -= 400
//         slider.style.left= `-${currentPx}px`
//         console.log(currentpx)
        


        
//     }
//  })




let slider = document.querySelector('.img')
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let allImages = document.querySelectorAll("img")



let currentPx = 0;
next.addEventListener("click", () => { 
    
    if(currentPx === (allImages.length-1) * 400){ 
        currentPx = 0
        slider.style.left = `-${currentPx}px`
       return
    }

    currentPx += 400
    slider.style.left = `-${currentPx}px`
     
})



prev.addEventListener("click", ()=>{

    if(currentPx === 0) {
        alert("this is first image")
        
    }else{
         currentPx -= 400
         slider.style.left = `-${currentPx}px`
         alert("This is last image")
         return
         
    }

   
})