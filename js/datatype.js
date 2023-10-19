// let myName ="Phyo Min Khant";
// let myBirth = 2003;
// let myCurrentBirth = 2023;

// console.log("My name is "+myName); //before ES6
// console.log(`My name is ${myName}`); // ES6

// console.log(`My name is ` + myName+`. I'm `+(myCurrentBirth-myBirth)+` years old.`); //before ES6
// console.log(`My name is ${myName}. I'm ${myCurrentBirth-myBirth} years old.`);  // ES6


// let myAge = 20;
// let myWeight = 140;
// let myWeightUnit = "lb";
// let newYorkTemp = -3;
// let tempUnit = "degC";

// console.log( typeof myAge);
// console.log (typeof myWeight);
// console.log (typeof myWeightUnit);
// console.log (typeof newYorkTemp);
// console.log (typeof tempUnit);

// array

// const fruits = ["orange","apple","banana","mango","lemon"]
// console.log(fruits[3])

// fruits[3] = "milk";
// console.log(fruits);

// let arr = [];
// arr [0] = "lemon";
// arr [1] = "orange";
// arr [2] = "apple";
// arr [3] = "mango";
// arr[14]= "banana"
// console.log(arr);
// console.log(arr[9]);

// const obj = {
//     orange : 700,
//     banana : 200,
//     apple : 300,
//     lemon : 600,

// }
// console.log(obj);

// const mySelf = {
//     name : "Phyo Min Khant",
//     age : 20,
//     city : "Naunghkio",
//     skills : ["html","css","js","php"],
// }
//  console.log(`I'm ${mySelf.name} and ${mySelf.age} years old. I live in ${mySelf.city}`); 
//  console.log(`I'm ${mySelf["name"]} and ${mySelf["age"]} years old. I live in ${mySelf["city"]}`)

//  mySelf.age = 21
//  console.log(mySelf);

// const obj = {};

// obj.a = "aaa";
// obj.b = "bbb";
// obj.c = "ccc";
// obj.c = "333";
// obj.d = "ddd";

// console.log(obj)
// console.log(obj.e)

let name = "mg mg";
let age = 15;
let township = "kyauk myoung";
let pocketMoney = 200;
let orange = 50;

let leftMoney = pocketMoney-orange;
// console.log(leftMoney);

let bag = ["mm","eng","bio"];
let pan = null;

let canmgmgfriendSmoke = true;
let canmgmgSmoke = false;

let student1 ={
    name,
    age,
    township,
}
// console.log(student1);

let student2 = {
    name : "zaw zaw",
    age : 13 ,
    township : "naunghkio",
}

let student3 = {
    name : "hla hla",
    age : 16,
    township : "mandalay",
}

let student4 = {
    name : "ma ma",
    age : 19,
    township : "pyinoolwin"
}

let students = [
    student1,
    student2,
    student3,
    student4,
]
// console.log(students);
// console.log(students[2]);
// console.log(students[2].age);

// console.log(students[3]);
// console.log(students[3].name);

// const result = [];
// let resultIndex = 0;
// function calcArea(w,b) {
//     // return `${w*b} sqft`
//     let area = w*b;
//     const results = {
//         width : w + "ft",
//         breadth : b + "ft",
//         area : area + "sqft"
//     }
//     result[resultIndex++] = results;
//     return result
    
// }
// console.log(calcArea(50,150));
// console.log(calcArea(30,150));
// console.log(calcArea(20,150));
// console.table(result);

const result =[]
let resultIndex = 0;

function calcArea(w,b) {
    let area = w*b;
    const results ={
        width : w + "ft",
        breadth : b + "ft",
        area : area + "sqft"
    }
    result[resultIndex++] = results
    return result
}
// console.log(calcArea(50,150));
// console.log(calcArea(30,150));
// console.log(calcArea(20,150));
// console.table(result);

const rates = {
    USD : 2100,
    SGD : 2000,
    EUR : 1999,
}

function toMMK(amount,currency) {
    let exchangeRate = rates[currency];
    return `${amount * exchangeRate}` + " MMK"
}
// console.log(toMMK(100,"USD"));
// console.log(toMMK(40,"SGD"));
// console.log(toMMK(3000,"EUR"));

function toCurrency(amount,currency){
    let exchangeRate = rates[currency];
    return `${(amount/exchangeRate).toFixed(2)} ${currency}`

}
console.log(toCurrency(100000,"USD"));
console.log(toCurrency(100000,"SGD"));
console.log(toCurrency(100000,"EUR"));