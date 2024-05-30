import fetch from 'node-fetch';

// One way promise
// creation of Promise
// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// })


// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// another way
// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     }, 1000)
// }).then(function() {
//     console.log("Async 2 resolved");
// })


// third promise example
// new things comes -> data comes out from database, files etc

// parameter passing in resolve method
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve({username: "nick", email: "nick@gmail.com"});
//     }, 1000)
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })


// Fourth promise

// const promiseFour = new Promise( function(resolve, reject) {
//     setTimeout(function() {
//         let error = true;
//         if(!error){
//             resolve({username: "Nick", password: "123"})
//         }else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// call back hell resolve conditions

// then chaining 
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })


// Using finally() -> always executed
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => {
//     console.log("The Promise is either resolved or rejected");
// })


// promise Five

// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false;
//         if(!error){
//             resolve({username: "javascript", password: "123"})
//         }else {
//             reject('ERROR: Something went wrong in JS Code')
//         }
//     }, 1000)
// })


// async await ->
// async-await: directly error ko handle nahi karte 

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();



// example 6
// JSON Data handle

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data); 
//         // console.log(response);
//     } catch (error) {
//         console.log("ERROR: ", error);
//     }
// }

// getAllUser();


// Using then and catch

// fetch('https://api.github.com/users/nitish105')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))




// -> --------- promise.all() in js --------


// Promise.all():- is a built-in method in JavaScript that takes an iterable (e.g., an array) of promises as input and returns a single Promise that resolves when all of the input promises have resolved, or rejects with the reason of the first promise that rejects.

// basic syntax:
// Promise.all(iterable);

// `iterable` is an array (or any iterable) containing Promise objects.


// example:

const promise1 = new Promise( (resolve, reject) => {
    setTimeout( function() {
        resolve('Promise 1 is resolved...')
    }, 1000)
})

const promise2 = new Promise( (resolve, reject) => {
    setTimeout( function() {
        resolve('Promise 2 is resolved...')
    }, 1000)
})

const promise3 = new Promise( (resolve, reject) => {
    setTimeout( function() {
        resolve('Promise 3 is resolved...')
    }, 1000)
})


Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
})
.catch( (error) => {
    console.log(error);
})

// In this example, Promise.all() is used to wait for all three promises (promise1, promise2, and promise3) to resolve. Once all promises have resolved, the then() method is called with an array containing the resolved values of each promise. If any of the promises reject, Promise.all() immediately rejects with the reason of the first promise that rejects.