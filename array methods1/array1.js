// let coins = [1,2,5,10,20,50,100,200]


// let billingoFThaDay =[450,650,8484,60,690]

let names = ["kanha","anil","sahil","aakash","nirmla",]
// // console.log(names[2])

// // console.log(billingoFThaDay)

// // for(let i =0; i<coins.length; i++){
// //     console.log(coins[i])
// // }



// // * methods of an Array

// // * Map=(()=>{}) 
// // * filter(()=>{})
// // * reducer(()=>{})

//     // for(let i = 0; i < names.length; i++){
//     //     console.log(i + "pareek" + names[i]);
//     // }

// // Array.map(()=>{})
// // key:   1 it will return a new array.
//     //    2 it will not change your original array.
// let printnames = names.map((names)=>{
//     return names+ "pareek"
    
// })

// // console.log(printnames)



// //  Array.filter(()=>{})
// // key: 1 it will return a new Array. 

 
// let result = coins.filter((coin, i) => { return coin< 50 })     * small coins    
// console.log(result)


 
// let result = coins.filter((coin, i) => { return coin> 50 })  * big coins
// console.log(result)


// let filterarray = coins.filter(coin => coin<50)             * simple method
//   console.log(filterarray)


//   let filterarray = coins.filter(coin => coin>50)            * simple method
//   console.log(filterarray)  



// * Array. reducer(()=>{}, intialvalue)

// 1 it will give  you a return Number


// let reducer = coins.reduce((acc, curr,)=>{
//     return acc += curr},1000)


// console.log(reducer)


// console.log(names)
// console.log(printnames)
// console.log(result)


// * forEach(()=>{})
// it works like your for loop,but it will not give you any return

names.forEach((name, index)=>{
    // console.log(name,"kumar")
})


// for (let i =0; i<coins.length;i++){
//     if(coins[i]>=50){
//         // console.log(coins[i])
//     }
// }

// let totalmoney =0
//  for (let i =0; i<coins.length;i++){
//     totalmoney += coins[i]
//     // console.log(totalmoney)
// }

let coins = [1,2,5,10,20,50,100,200]                

let sortingArray = coins.sort((a, b) => a - b)                     // /sorting an array
console.log(sortingArray)                                        //sorting an array form of accendign
         
let sortingArr = coins.sort((a, b) => b - a) 
console.log(sortingArr)                                            //sorting an array form of desc
   
let flating = coinsNotes.flat()                                 //one level flatting array
 console.log(flating)          
let flating2 = coinsNotes.flat(2)                                  //two level flatting an array
 console.log(flating2)                            
let infiniteFlatting = coinsNotes.flat(Infinity)                //infinite flatting
console.log(infiniteFlatting)



 