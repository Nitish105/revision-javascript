//-> ---- if statement-----------------------

// if(true) {
//     // execute code
// }

// if(false) {
//     // do not execute code
// }


// if(2 == "2") {
    //     console.log("executed");
    // }
    
    // if(2 === "2"){
        //     console.log("executed");
    // }


// const isUserLoggedIn = true 
// const temperature = 41

// if(temperature === 50) {
//     console.log("less than 50");
// }else {
//     console.log("temperature is greater than ");
// }

// console.log("execute");


// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000;
// if(balance > 500) console.log("test");


// nested loop
// if(balance < 500) {
//     console.log("less than 500");
// } 
// else if(balance < 750) {
//     console.log("less than 750");
// }
// else if(balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }


// const isUserLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(isUserLoggedIn && debitCard && 2 == 2) {
//     console.log("Allow to buy course");
// }

// if(loggedInFromGoogle || loggedInFromGoogle ) {
//     console.log("User logged in...");
// }







// -> Switch case statement 

// syntax 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = "march"

// switch (month) {
//     case "Jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("February");
//         break;
//     case "march":
//         console.log("March");
//         // break;
//     case "april":
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


// truthy - falsy concept

// const userEmail = "nitish@gmail.com" // true
// const userEmail = ""  // false
// const userEmail = []  // true

// if(userEmail){
//     console.log("Got user email");
// }
// else {
//     console.log("Don't have user email");
// }


// Note: Interview based questions asked
// falsy values
// false , 0, -0, BigInt 0n, "", null, undefined, NaN 


// truthy values
// truth, 1, "0", 'false', " ", [], {}, function(){} //empty function

// array
// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }


//objects
// const emptyObj = {}

// if(Object.keys(emptyObj.length === 0)) {
//     console.log("Object is empty");
// }


//Nullish coalescing Operator (??): null, undefined based
 
// let val1;
// val1 = 5 ?? 10
// val2 = null ?? 10
// val3 = undefined ?? 15
// val4 = null ?? 10 ?? 20 

// console.log(val4); 


// ternary operator 
// condition ? true : false 
// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");




// -> ------------------- Loops -------------------

// for loop

// for(let i = 1; i <= 10; i++){
//     const element = i;
//     if(element == 5) {
//         console.log("5 is best number");
//     }
//     // console.log(element);
// }

// console.log(element); // error -> element is not access outside


// -> nested loop
// for (let i = 1; i <= 10; i++)  {
//   console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and inner loop ${i}`);

//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// }


//-> array with loop

// let myArray = ["spiderMan", "superMan", "batMan"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);    
// }


// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`Value of i is ${index}`);    
// }



// -> while and do while loop

//  while loop

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);    
//     index = index + 2
// }


// array with while loop
// let myArray = ["spiderMan", "superMan", "batMan"]
// console.log(`Length of array is: ${myArray.length}`);

// let arr = 0; 
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1;
// }



// do-while loop
// let score = 11

// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score <= 10);



//-> ----------- Higher order array Loops --------

// array specific loop
// ["", "", ""] //array
// [{}, {}, {}] // object

// 1. for of 
// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "Namaste js"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }



//-> ------------ Maps -------------
// map is a object hai jo ki key-value pair hold karta hai
// it is also unique in the map's collection

// const map = new Map()
// map.set('IN', "India")
// map.set('UK', "United Kingdom")
// map.set('USA', "United States of America")
// map.set('IN', "India")

// console.log(map);


// array with Map Using for of Loop
// for (const [key, value] of map) {
//     console.log(key, ':', value);
// }

// object with Map Using for of Loop

// Note : Object is not iterable in the map => (for-of) loop

// const myObject = {
//     'game1' : 'Mario',
//     'game2' : 'Taken5'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':', value);
// }


// for in loop with object 
// const myObj = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     java: "Java by oracle"
// }

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }


// for in with array
// it give you alway keys
// const myTea = ["IceTea", "LemonTea", "MasalaTea", "GreenTea"]

// for (const key in myTea) {
    // console.log(key);
//     console.log(myTea[key]); // value
// }


// Map with for in loop 
// Map is not iterable
// const map = new Map()
// map.set('IN', "India")
// map.set('UK', "United Kingdom")
// map.set('USA', "United States of America")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


//-> forEach Loop

// Type - 1  callback with normal function
const coding = ["js", "python", "java", "C#"]

// coding.forEach(function (item) {
//     console.log(item);
// })


//Type-2 callback with arrow function
// coding.forEach( (val) => {
//     console.log(val);
// })

// different parameter values of arrow function in forEach loop
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

//Type -3
// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)



// Note: very Important using forEach loop  In real life works

const myProgramming = [
    {
        programmingName: "Javascript",
        programFileExtension: ".js"
    },
    {
        programmingName: "Java",
        programFileExtension: ".java"
    },
    {
        programmingName: "Python",
        programFileExtension: ".py"
    },

]

// myProgramming.forEach( (item) => {
//     console.log(item.programmingName);
// })