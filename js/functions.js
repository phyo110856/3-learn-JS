// function run(star = "phyo"){
//     console.log(`${star}`);
//     console.log(`${star} ${star} `);
//     console.log(`${star} ${star} ${star}`);
    
//     return "this is stars"
//     console.log("* * * *");
// }
// run("*")
// run(2)
// run('=')
// run()

// function adding(x,y){
//     return x+y
// }
// console.log(adding(3,4));

// let x;
// console.log(x);
// run();
// run();
// run();
// run();
// run();
// run();

//Age calculation
function calcAge(birthYear){
    let currentYear = 2023;
    let age = currentYear-birthYear
    return `You are ${age} years old.`
}
// console.log(calcAge(2003));
// console.log(calcAge(2002));
// console.log(calcAge(2001));

//Tax calculation
function calcTax(amount,taxPercentages = 5){
    let tax = (amount / 100) * taxPercentages
    return tax
}
// console.log(calcTax(10000));
// console.log(calcTax(17500000,20));
// console.log(calcTax(4000,2));

let total = 0
const voucher = [];
let voucherIndex = 0;
const fruits = {
    orange : 700,
    banana : 200,
    apple : 300,
    lemon : 600,
}

function buy(item,quantity) {
    let fruitPrice = fruits[item];
    let cost = quantity * fruitPrice;
    total = total + cost;
    
    let list={
        item,
        price : fruitPrice,
        cost,
        quantity,
    }
    voucher[voucherIndex++]=list

    return cost;
}
buy("orange",5)
buy("banana",10)
buy("apple",20)
buy("lemon",8)
console.table(voucher);

console.log(total);
console.log(calcTax(total));
console.log("net total " + total + calcTax(total));
console.table({
    total,
    tax : calcTax(total),
    nettotal : total + calcTax(total)

})