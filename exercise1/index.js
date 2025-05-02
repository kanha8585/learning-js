

let count = 1

for(let count = 1; count <= 10;  count++ ){

    console.log(count)
}




for(let i = 1; i <= 20; i++)
    if(i % 2 === 0){
        console.log(i);
    }
 

for(let i = 1;  i <= 10; i++){

    console.log(5 * i)
    console.log(`${5} x ${i} = ${5 * i}`)

}


let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
}

console.log(`${sum}`);


//reverse a string using a loop (input: "hello", output: "olleh")
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"

//check if a number is prime (input: 7, output: true)
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true

//count the number of vowels in a string (input: "javascript", output: 3)
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript")); // Output: 3

 



 

    


