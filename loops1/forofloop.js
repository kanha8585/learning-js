
// *for loop injavascript



let profile ={
    firstName: "kanha",
    lastName:  "kummar",
    age: 22,
    marriedStatus: "false",
}

console.log(profile["age"])


for (let key in profile){
    console.log(key, ":" + profile[key])
}


let bikes =["hero","honda","pulsar","yamha","tvs","suzuki","bajaj",]

for (let bike of bikes){
    // console.log(bike)
    console.log(bike,"bikes")
}

if(bikes[0]== "hero"){
    console.log("this is most popular bike")
}




