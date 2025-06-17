let profile = {
    name: "kanha",
   LastName: "pareek"
}

console.log(profile)


let age = 22
console.log("outer",age)



//--------------------------------------------scope in very basic way-------------------------

function outer(){
    console.log("function scope is here")

    let fristName = "anil"
    console.log("inner",age)
    console.log("inner",fristName)
}

outer()


//note. lexical scope
// child can access parents property. but parents cannot access child's property.
// and sibling does'nt share data with each other.


function outer(){
    let mobile = "9023457890"

    function inner(){
        let tel = "01561890765"
        console.log("inner value", mobile)
    }

    function inner2(){
        console.log("inner2",tel)
    }
    inner()
    inner2()
    console.log(tel)
    console.log("outer value",mobile)
}

outer()


