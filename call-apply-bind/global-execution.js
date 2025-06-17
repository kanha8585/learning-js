let programStart = "starting one"
// console.log(programStart)
setTimeout(()=>{
    // console.log("programing two")
},0)

let programEnd ="Ending three"  //NOTE: global execution context.last in frist out
// console.log(programEnd)

function greet(){
    console.log("welcome")

    function stay(){
        console.log("wating")

        function goodBye(){
            console.log("goodbye")
        }
   goodBye(); }
stay();}
greet();
