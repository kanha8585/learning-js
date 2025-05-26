let profile ={
    name: "kanha",
    age: 22,
    email: "Kanhapareek85@gmail.com",
    coureName: "mern stack developer",
    duration: "6 month",
    aadharcardNo: "296689707204",

}


//OBJECT destructring   :its allows you to save the object property into short name

let {name,age,email,coureName,duration,aadharcardNo} = profile
console.log(Name)




//renaming object property 

let{aadharcardNo: card} = profile                     //giving new name of our exsiting property from an object

console.log(card)


//B. Array destructering

let names = ["rakesh", "ranjit", "suresh", "mohan"]

let [a, ,, b] = names                      // you can add comas for holding values   output: "rakesh" "ranjit"

console.log(a, b)
