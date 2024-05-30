// ------------ Functions in javascript -------------

// -> Functions with parameter

// function sayMyName() {
//     console.log("N");
//     console.log("I");
//     console.log("T");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


// addTwoNumbers(3, 4)  // 7
// addTwoNumbers(3, "4")   // 34 
// addTwoNumbers(3, "a")   //3a
// addTwoNumbers(3, null)  // 3

// const result = addTwoNumbers(3, 5)  // 8

// console.log("Result ",result);  // undefined

// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2;
//     // return result; 

//     return number1 + number2;
// }

// const result = addTwoNumbers(3, 5)  
// console.log("Result ",result);  // 8



// function loginUserMessage(username = "Ram") {
//     if(!username){
//         console.log("Please Enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("nitish")); // nitish

// console.log(loginUserMessage());  //undefined



//-> Functions with Objects

// function calculateCartPrice(...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 8000));

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 8000));

// const user = {
//     username : "Hanuman",
//     price: 999
// }

// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);   
// }

// handleObject(user)

// handleObject({
//     username: "Ram",
//     price: 1999
// })

// const myNewArray = [200, 400, 600, 7000]

// function returnSecondValue(getArray) {
//     return getArray[1]
// }


// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));





// -> ------------- Scopes ----------------------

// var c = 300
// let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner: ", a);
// }

// console.log(a);
// console.log(b); 
// console.log(c);


// nested function
// function one(){
//     const username = "nitish"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website); // error

//     two()
// }

// one()


// closure
// if(true) {
//     const username = "nobita"
//     if(username === "nobita") {
//         const website = "youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// console.log(username);


// Hoisting
// normal function
// console.log(addOne(5));

// function addOne(num){
//     return num + 1
// }


// // variable function
// addTwo(3);
// const addTwo = function(num) {
//     return num + 2;
// }


// -> ----- this and arrow function-----------

// this -> current context/object ko refer karta hai 

// const user = {
//     username: "nitish",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to Website`);
//         // console.log(this);
//     }
    
// }

// user.welcomeMessage()

// context change kardiya
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // refer empty in node but in browser mei window object ko refer karta hai


//Normal function
//const myChai = function(){
//         let username = "nick"
//         console.log(this.username);  // function ke ander hum this keyword ko use nahi kar sakte, result give you undefined
//     }
    
// myChai()





// -> arrow function

// Basic arrow functions

// const myChai = () => {
//     let username = "nitish"
//     console.log(this);
// }

// myChai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


//Implicit return -> one line arrow function
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);


// objects ko use karna in parenthesis 
// const addTwo = (num1, num2) => ({username: "nitish"});

// console.log(addTwo(3, 4));


// array in function 
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(function () {
    
// })




// -> Immediately Invoked Function Expressions (IIFE)

// Normal function calling
// function myDatabase() {
//     console.log(`Your Database is Connected...`);
// }

// myDatabase()


// IIFE invoked
// globol scope ke variable, etc se pollution, ko hatne ke liye hum IIFE ka use karte hai

// Note: This is also called named IIFE
// (function myDatabase() {
//     console.log(`Your Database 1 is Connected...`);
// })();

// Note : IF we use two IIFE function then, unke function context ko pata nahi hota konsa function invoked karna hai isliye rokne ke liye hum (semicolon); ko use karte hai

// IIFE With Arrow function
// ( () =>  {
//     console.log(`Your Database 2 is Connected ...`);
// } )();

// passing paramete value this way in IIFE function
// This is also called Unnamed IIFE
// ( (name) =>  {
//     console.log(`Your Database 2 is Connected ${name}...`)
// } )('nitish')

