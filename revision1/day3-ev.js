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




