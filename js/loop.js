
// for(let i=1;i<6;i++){
//     console.log("*");
//     console.log("* ** ");
//     console.log("* ** ***");
//     console.log(i,"loop");
// }

// for(let i=5;i>1;i--){
//     console.log("*");
//     console.log("* ** ");
//     console.log("* ** ***");
    
// }

// for(let i=0;i<=10;i++){
//     if(i===5){
//     continue
//     }
//     console.log(i,"loop");
// }

const arr = ["a","b","c","d","e","f","g"];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(i,arr[i]);
}

for(x of arr){
    console.log(x);
}
for(x in arr){
    console.log(x,arr[x]);
}