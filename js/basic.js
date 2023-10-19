// function expression
// const adding = function(x,y){
//     return x+y;
// }
// console.log(adding(3,4));

// (function(){
//     console.log("I'm IIFE");
// })()

// console.log((function(){
//     return "I'm phyo"
// })());

// console.log(`I'm ${(function(){
//     let birthYear = 2003;
//     let currentYear = 2023
//     return currentYear-birthYear
// })()} years old`);

//function expression
// const run = function(x,y){
// return x+y
// }
// console.log(run(3,4));


// function name(){
//     console.log("object");
// }

// (function () {
//     console.log("object");
//     return "IIFE"
// })()

// console.log((function(){
//     return "IIFE"
// })());


// console.log(`I'm ${(function(){
//     let birthYear = 2003;
//     let currentYear = 2023;
//     return currentYear-birthYear
// })()} years old`);

// const ojb ={
//     a : "aaa",
//     b : "bbb",
//     c : function(){
//         return 'This is method.'
//     },
//     d(){
//         return 'This is d.'
//     }
// }
// console.log(ojb);
// console.log(ojb.c());
// console.log(ojb.d());

// const exchangeCenter = {
//         name : "MMS exchange",
//         address : "san chaung",
//         openHour : {
//             open : "9 am",
//             close : "5 pm",
//         },
//         rates : [
//         {
//             currency : "USD",
//             rate : 2100,
//         },
//         {
//             currency : "EUR",
//             rate : 1650,  
//         }],
//         intro(){
//             return `This is ${this.name} and is located in ${this.address}`
//         },
//         exchange : function(amount,fromCurrency,toCurrency){
//             //logic
//             return "exchage money"
//         },
//         saveRecord : function(list){
//             //logic
//             return "saved";
//         }
// }
// console.log(exchangeCenter.intro());

// let wakeupTime = 8;
// if(wakeupTime>=7){
//     // console.log("a sin pyay dl");
// };

// // let beforeStudy = 9;
// // if(beforeStudy<=10){
// //     console.log("sr ya ml");
// // }

// let mark = 89;
// if (mark >= 80) {
//     console.log("destination");
// }else if (mark>=40) {
//     console.log("pass");
// } else {
//     console.log("fail");
// }

// function isOddEven(x){
//     if(x%2===0){
//         return x + " is even"
//     }else{
//         return x + " is odd"
//     }
// }

// function isOddEven(x){
//     if(x%2===0){
//         return x + " is even"
//     }
//         return x + " is odd"
    
// }
// console.log(isOddEven(5));
// console.log(isOddEven(234));
// console.log(isOddEven(4325));
// console.log(isOddEven(4534936));

// function wakeupTime(x){
//     if(x >8){
//         return "yik khn ya ml"
//     }
//     return "a sin pyay dl"
// }
// console.log(wakeupTime(5));
// console.log(wakeupTime(8));
// console.log(wakeupTime(12));
// console.log(wakeupTime(9));

// function needMoney(x){
//     if(x>=200){
//         return " Bus se ya ml";
//     }
//     return " lan shouk ya ml"
// }
// console.log(needMoney(200));
// console.log(needMoney(100));
// console.log(needMoney(199));

let busFee = 300;
function needMoney(pocketMoney){
    if (pocketMoney>=busFee*2){
        return "happy ml";
    }
    return "sate kug ya ml"
}
// console.log(needMoney(1800));
// console.log(needMoney(600));
// console.log(needMoney(200));

function iWillPass(writing,speaking) {
    if(writing > 60 && speaking >60){
        return "I will pass"
    }
    return "Fail"
}
// console.log(iWillPass(90,80));
// console.log(iWillPass(60,80));

function canVote(age,nationality){
    if(age>=18 && nationality =="mm"){
        return "I can vote"
    }
    return "I cann't"
}

// console.log(canVote(32,"mm"));
// console.log(canVote(12,"mm"));

function comeCampus(bus){
    if(bus===65 || bus===20 ){
        return "Campus ko yok dl"
    }
    return "Ma yok"
}
// console.log(comeCampus(20));
// console.log(comeCampus(65));
// console.log(comeCampus(43));

function lunch(food){
    if(food==="mar lar shnkhw" || food==="hot pot"){
        return " full stomach";
    }
    return " not full stomach";
};
// console.log(lunch("hot pot"));
// console.log(lunch("ice cream"));
// console.log(!!!true);

// if(true){
//     console.log("It is false");
// }
// true && console.log("It is also true");

// if(false){
//     console.log("It is true");
// }else{
//     console.log("It is false");
// };

// true ? console.log("It is also true") : console.log("It is also false");

function adding(x,y){
if(typeof x==="number" && typeof y==="number"){
    return x+y
}
return "incorrect argument"
}
console.log(adding(4,6));
console.log(adding(4,"6"));
