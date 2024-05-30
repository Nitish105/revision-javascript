// console.log("Revision js");

// Variable
// Difference between in let, var and const 

// const accountId = 142566325
// let accountEmail = "nitish@gmail.com"
// var accountPassword = "123456"
// accountCity = "Jaipur" // never used

// let accountState;

// accountId = 2 // not allowed

// accountEmail = "nick@gmail.com"
// accountPassword = "987456"
// accountCity = "New Delhi"

// console.log(accountId);
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


//------------- data type -------------

// "use strict"; // treat all JS code as newer version

// alert(" 3 + 3") // alert are using browser

// let name = "nitish"
// let age = 18
// let isLoggedIn = false

//1. Number 
//2. string
//3. Boolean 
//4. bigInt
//5. null -> standalone value or representation of empty value
//6. undefined -> did not initialize value
//7. symbol- uniqueness find -> react
//8. Object
//9. typeof -> finding type of variable


// console.log(typeof age); // number 
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
console.log(typeof NaN);  // Number


// ------- Data type conversion -------
// let score = "abab"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" -> 33
//  "33abc" -> NaN
// true -> 1 , false -> 0


// conversion number to boolean
// let isLoggedIn = "nick";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 -> true,  0 -> false
// "" -> false
//  "nick" -> true


// conversion typecast number to string
// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// --------------Operations------------


// let value = 3 
// let negValue = -value
// console.log(negValue);

//problem
// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); //32

// console.log(+true); // 1
// console.log(+""); // 0

// let num1, num2, num3 

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);


//---------comparison operator--------------

// console.log("2" > 1); // true
// console.log("02" > 1); // true

// problems
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


// === strictly check values as well as data types also

// console.log("2" == 2); // true

// console.log("2" === 2); // false


// ----------- Stack & Heap memory ----------------
// 1) stack - primitive 
// 2) heap - non - primitive

// let myYoutubeName = "codeWithNitish"

// let anotherName = myYoutubeName
// anotherName = "coffeeWithNitish"

// console.log(myYoutubeName);
// console.log(anotherName);

// let userOne = {
//     email: "user@gmail.com",
//     upi: "user@ybl"
// }

// let userTwo = userOne

// userTwo.email = "nitish@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email);



//------------- String in javascript ---------------

// console.log("hello" + " world");

// const name = "nitish ";

// const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);


// another way to declare string
// const gameName = new String('nitish-Kumar')

// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


// let newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(newString);


// const newStringOne = "      mySweetHome  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://www.linkedin.com/in/nitish105";

// console.log(url.replace('nitish', 'nick'));

// console.log(url.includes('nick'));


// split() method - convert string into array of substring, then return array
// const strObject = new String('Ram Bhakt')
// console.log(strObject.split(" "));



// ----------- Numbers and Math ------------------

// ---- Number-------------
// const score = 400 
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2));

// const otherNumber = 123.6663;
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// // console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));



// ----------- Math Library -------------

// console.log(Math);
// console.log(Math.abs(-4)); // abs function -> convert negative value to positive value
// console.log(Math.round(4.6));
// console.log(Math.ceil(5.6)); // ceil means -> highest value giving you
// console.log(Math.floor(5.6)); // floor means -> lowest value giving you
// console.log(Math.min(22,45, 5, 4, 6));
// console.log(Math.max(22,45, 5, 4, 6));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);


// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);




// --------------- date and time---------------------

// Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//Note - interview asked question
// console.log(typeof myDate);  //object


// let myCreatedDate = new Date(2024, 1, 16);
// let myCreatedDateWithTime = new Date(2024, 1, 16, 0, 15);

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDateWithTime.toLocaleString());

// let myCreatedDate = new Date("2024-01-16");
// let myCreatedDate = new Date("01-16-2024");
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//Note - Interview asked question
// console.log(Date.now()); // present time in milliseconds

// console.log(Math.floor(Date.now()/1000)); // present time in seconds


// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// newDate.toLocaleString('default', {
//     weekday:"long"
// })

