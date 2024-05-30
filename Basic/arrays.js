//------------- arrays in javascript --------------------

// First way to declaration of array
const myArr = [0, 1, 2, 3, 4 , 5]

// Another way to declaration of array
// const myArr2  = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // value are insert at starting
// myArr.shift()  // jo value start insert kari thi vo delete kar deta hai shift() method

// console.log(myArr);

// console.log(myArr.includes(9)); // includes() method -> return the value in boolean i.e true or false
// console.log(myArr.indexOf(6));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(typeof newArr);


// Interview most asked question
// Slice  Vs   Splice

// case: slice  - In this slice, it does not change the original array listing
// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// // Case: Splice -In this splice, it changes the original array listing
// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);



// Push vs Concat
// Push - existing array pe hi push karta hai
// Concat- return new array, then insert value

// const marvel_heros = ["IronMan", "CaptainAmerica", "Thor", "SpiderMan"]
// const dc_heros = ["SuperMan", "BatMan", "FlashMan"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[4]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);


// Note : Most asked based questions 
// Spread Operators -> return individual arrays

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// nested arrays
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// console.log(Array.isArray("Nitish"))

// convert string to array Using from() function
// console.log(Array.from("Nitish"))

// Note : Interview based questions
// console.log(Array.from({name: "Nitish"}))


// individual value converts into array Using Array.of()
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));


