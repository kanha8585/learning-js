// ✅ Operators (Arithmetic, Logical, Comparison)

let a = 3
let b = 10
let c = 10

//** Arithmetic operatos

// console.log(a+b)     // Answer = 13
// console.log(b-a)     // Answer = 7
// console.log(a*b)     // Answer = 30
// console.log(a/b)     // Answer = 0.3
// console.log(b%a)     // Answer = 1
// console.log(a ** b)  // Answer = 59049


 //** Comparison operatos
// console.log(a>b)          // false    ** greater than
// console.log(a<b)          //true      ** less than
// console.log(10<=10)       //true      ** less than or equal
// console.log(10>=10)       //true      ** greater than or equal
// console.log(10=="10")     //true      ** it will check only value
// console.log(10==="10")    // false    ** note:  it will also check data type along with value

//C. LOGICAL OPERATOR   && and  || or    !not

// console.log(50 > 40  &&  10 == "10")      //true              //AND operator: both condition has to be true 
// console.log(100 < 90 || 60 > 30)         //true                    //or operator: if one condition is true, it will give you true
// console.log(false ==  !true)             //true 
// console.log(!4 == 5)                     //false 
// console.log(5 !== 4)                     //true

// parseInt, parseFloat, number

let num = "10.50"
 
// console.log(parseInt(num))          //10
// console.log(parseFloat(num))        //10.5   you will get the value after decimal also


let stringToNumber = Number(num)
let newNum = 20 

console.log( newNum + stringToNumber  )  


 