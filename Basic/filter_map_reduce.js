// -------- Filter, Map and Reduce ------------


// const coding = ["js", "python", "java", "C#"]

// const result = coding.forEach( (item) => {
    //     // console.log(item);
    //     return item;
    // })
    
    // console.log(result);  // undefined
    

// -> ------- filter() in js -------------
// Note: Filter returned values ko return kar deta while forEach nahi karta

// const myNumbers = [1, 2, 3,4,5 ,6,7 ,8, 9, 10]

// Note: when we use without scope, then do not use curly braces
// const resultNumber = myNumbers.filter((num) => num > 4)
// console.log(resultNumber);

// Note: when use scope, {} curly braces in filter then must use return keyword
// const resultNumber = myNumbers.filter((num) => {
//     return num > 4
// })
// console.log(resultNumber); 


// using forEach
// const newNums = []

// myNumbers.forEach( (val) => {
//     if(val > 5) {
//         newNums.push(val)
//     }
// } )

// console.log(newNums);



// Note: Real life works example Important
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];


// let userBooks =  books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => {
//     return bk.publish >= 1995 && bk.genre === "History"})

// console.log(userBooks);






// ->------------ map() in javascript -------------
const myNumbers = [1, 2, 3,4,5 ,6,7 ,8, 9, 10]

// const result = myNumbers.map( (num) => num + 10)

// console.log(result);


// Note : Chaining method 

// const result = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
                

// chaining map with filter
// const result = myNumbers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40 )

// console.log(result);





// -> ----------- Reduce in javascript -------------

// real life use -> in useCart

// Reduce are three parameters:
// accumulator -> by default empty value
// currentValue -> current number jo chl raha hai
// initialValue -> value like 0,1....etc


// const myNums = [1, 2, 3, 4]

// reduce with normal function
// const myTotal = myNums.reduce(function (acc, curVal) {
//     console.log(`accumulator: ${acc} and currentValue: ${curVal}`);
//     return acc + curVal;
// }, 0)

// console.log(myTotal);



// reduce with arrow function
// const prices = [100, 200, 300, 5000, 600]

// const totalPrice = prices.reduce( (acc, curVal) => acc + curVal, 0)

// console.log(totalPrice);



// array with reduce
const shoppingCart = [
    {
        courseName: "Js Course",
        price: 2999
    },
    {
        courseName: "React Course",
        price: 3999
    },
    {
        courseName: "NextJs Course",
        price: 4999
    }

]


const totalPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPay);


