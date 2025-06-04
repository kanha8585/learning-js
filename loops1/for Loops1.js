// for loop in javascript
// for(initialization; condition; inc/dec){
//     code to run each time
// }

let count = 1


for(let count = 1; count <= 10;  count++ ){

    console.log(count)
}

let fullName = "Kanha pareek"

let name = "Kanha pareek"
let age = 24
let greet2 = "hello" + " " + name + ", welcome to our website. because you age is " + " " + age + " " +   "you are eligble for becoming instructer"

// templat literals

let greet = `hello ${name}, welcome to our website. because you age is ${age}, you are eligble for becoming instructer`

console.log(greet)


// asking user for a number. based on that number giving back him a table

let number = prompt("give a number, which you want to see the table")
let stringToNum = Number(number) 

for(let i = 1;  i <= 100; i++){

    console.log(stringToNum * i)
    console.log(`${stringToNum} x ${i} = ${stringToNum * i}`)

}






let greeting ="hello i am fine guys";

console.log(greeting)

let greeting1 ="i";
let greeting2 = "am";
let greeting3 = "fine";
let greeting4 = "guys";

console.log(`${greeting1}`)
console.log(`${greeting2}`)
console.log(`${greeting3}`)
console.log(`${greeting4}`)

 
 





// for(let i = 1; i >= 100 ; i++){ 
//      console.log(i, greeting)
//     console.log(i)
// }



//...........loops in advance......
// for loop in javascript


let names = ["kanha", "anil", "vasu", "aakash", "sunil", "nirmla"]

// for(let i = 0; i < names.length; i++){
//     //  console.log(names[i])
//     }




// for(let i = 0; i < names.length; i++){

//          if(names[i] === "anil"){
//             console.log("anil kumar")
//          } else {
//             console.log(names[i])
//          }
     
//     }    




// for(let i = 0; i < names. length; i++){
//     if(names[i] === "vasu"){
//         console.log("vasu pareek")
//     }else{
//         console.log(names[i])
//     }
// } 


for(let i = 0; i < names. length; i++){
    if (names[i] ==="kanha"){continue;}
    else{console.log(names[i])}
}



