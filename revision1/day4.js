// // loop in js
// // note: JavaScript loops are control structures that allow you to execute a block of code repeatedly.

// // for loop
// // syntax:      for(initialization, condition, inc/dec){
//                     //    code for execution
// //                   }

// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }
 

// for (let i = 100; i >=50; i--){
//     console.log(i)
// }


// let data = [
//     {
//         id:   8,
//         name:  "anil",
//         age:  17,
//          result: 70
//     },
//      {
//         id:   7,
//         name:  "aakash",
//         age:  21,
//          result: 78
//     },
//      {
//         id:   6,
//         name:  "vimal",
//         age:  17,  
//          result: 88
//     },
//      {
//         id:   5,
//         name:  "vikash",
//         age:  17,
//          result: 90,
//     },
//      {
//         id:   1,
//         name:  "dharma",
//         age:  17,
//          result: 60,
//     },
//      {
//         id:   2,
//         name:  "gourav",
//         age:  26,
//          result: 50,
//     },
//      {
//         id :  3,
//         name:  "kuldeep",
//         age:  47,
//          result: 90,
//     },
//      {
//         id:    4,
//         name:  "kanha",
//         age:  19,
//         result: 80,
//     },
// ]


// console.log(data[0])       // ** Frist value
// console.log(data[0].result)

// // ** Taking all data
// for (let i = 0; i < data.length; i++){
//     console.log("name:",data[i].name)
//     console.log("age:", data[i].age)
//     console.log("result:",data[i].result)
//     console.log("id:",data[i].id)
// }
 

// // **  filtering data with name
// for(let i = 0; i < data.length; i++){
//     if("anil"=== data[i].name){
//         console.log(data[i].name)
//         console.log("result:", data[i].result)
//         console.log("id:",data[i].id)
//     }

// }

// // ** filtering data with score

// for(let i = 0; i< data.length; i++){
//     if(data[i].result > 80){
//         console.log("id:",data[i].id)
//         console.log(data[i].name)
//         console.log("result:",data[i].result)
//         console.log("Grade A+ your study is the best")

//     }
// }

let stringToNum = 5
for(let i = 1;  i <= 10; i++){

    console.log(stringToNum * i)
    console.log(`${stringToNum} x ${i}`)

}


// for(let i = 1; i <= 10; i++){
//     // console.log(5*i)
//     console.log(`$ 5 * i = $5 *i`)
// }