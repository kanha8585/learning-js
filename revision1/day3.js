// ✅ Operators (Arithmetic, Logical, Comparison)

let a = 3
let b = 10
let c = 10

//** Arithmetic operatos

console.log(a+b)     // Answer = 13
console.log(b-a)     // Answer = 7
console.log(a*b)     // Answer = 30
console.log(a/b)     // Answer = 0.3
console.log(b%a)     // Answer = 1
console.log(a ** b)  // Answer = 59049


 //** Comparison operatos
console.log(a>b)          // false    ** greater than
console.log(a<b)          //true      ** less than
console.log(10<=10)       //true      ** less than or equal
console.log(10>=10)       //true      ** greater than or equal
console.log(10=="10")     //true      ** it will check only value
console.log(10==="10")    // false    ** note:  it will also check data type along with value

//C. LOGICAL OPERATOR   && and  || or    !not

console.log(50 > 40  &&  10 == "10")      //true              //AND operator: both condition has to be true 
console.log(100 < 90 || 60 > 30)         //true                    //or operator: if one condition is true, it will give you true
console.log(false ==  !true)             //true 
console.log(!4 == 5)                     //false 
console.log(5 !== 4)                     //true

// parseInt, parseFloat, number

let num = "10.50"
 
console.log(parseInt(num))          //10
console.log(parseFloat(num))        //10.5   you will get the value after decimal also


let stringToNumber = Number(num)
let newNum = 20 

console.log( newNum + stringToNumber  )  


// control flow
//--------------------------------------------if else-----------------------------------------

// if(true){
//     //  if condition is true this code will work
// }else{
//     // if above condition is false, this line will work
// }


let age = 42;

if(age > 60){
    console,log("no you are above 60, you should not drive");
}else if(age > 18){
    console.log("yes you are eligble for the driving licence. you are age is greater than 18");
}else{
    console.log("no you are not eligble for the driving licence");
}

//--------------------------------------------switch opertaor--------------------------------------

let day1 = "sunday";
let day2 = "monday";
let day3 = "tuesday";
let day4 = "wednesday";
let day5 = "thursday";
let day6 = "friday";
let day7 = "saturday";

switch (day6){
    case "sunday":
        console.log("set your main goal for the week");
        break;
     case "monday":
        console.log("Break with light activity rest");
        break;
      case "tuesday":
        console.log("Take a walk,do something fun");
        break;
     case "wednesday":
        console.log("Going a trip  ");
        break;
     case "thurday":
        console.log("Clean the home");
        break;
     case "friday":
        console.log("Office work ");
        break;
     case "saturday":
        console.log("Finish or submit work");
        break;                       
}


//-----------------------------------------ternary operator---------------------------------------------

// (condition) ? "this code will run if condition is true" : "if condition is false this line will be run"

let age2 = 19
let message = age2 > 18 ? "yes you are apply driving licence" : "you are not apply driving licence"

let number = 10
let message2 =    (number > 20)  ?  "yes its greater than 20"  :  "its lower than 20"

console.log(message)




