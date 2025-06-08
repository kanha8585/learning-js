
let coins = [400,200,89,56,34,90,32,11,56,45,37,89]
// for (let i = 0; i < coins.length; i++){
//     if(coins[i] >= 50){
//         console.log(coins[i])
//     }
// }

let totalmonay = 0
for(let i = 0; i < coins.length; i++){
    totalmonay = totalmonay + coins[i]
    totalmonay += coins[i]
}

console.log(totalmonay)