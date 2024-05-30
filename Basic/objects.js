//--------Objects in depth (javascript) --------------

// declaration of objects into two ways
// 1. literals
// 2. constructors 

// Singleton - constructor ke through banta hai, like below mentioned
// Object.create


//-> -------------- Object Literals--------------

// Note: Interview based question
// const mySymbol = Symbol("key1")

// const jsUser = {
//     name: "Nitish",
//     "full name": "Nitish Kumar",
//     [mySymbol]: "myKey1",
//     age: 22,
//     location: "New Delhi",
//     email: "nitish@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: [
//         "Monday", "Saturday"
//     ]
// }

// -> first way to access objects value 
// console.log(jsUser.email);
// console.log(jsUser.full name); //Not allowed-> error in case 


// -> another way to access objects value
// console.log(jsUser[email]);  // error in case also 
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser.mySymbol);

// jsUser.email = "nitish@yahoo.com"
// Object.freeze(jsUser)
// jsUser.email = "nitishKumar@yahoo.com"

// console.log(jsUser);


// jsUser.greeting = function() {
//     console.log("Hello js user");
// }

// jsUser.greetingTwo = function() {
//     console.log(`Hello js user, ${this.name}`);
// }

// console.log(jsUser.greeting); // undefined

// console.log(jsUser.greeting()); // error
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());



//-> --------------- Object Literals ---------------

// singleton objects
// const tinderUser = new Object()

// another way -> non - singleton  objects
const tinderUser = {}

tinderUser.id = "1234ahs"
tinderUser.name = "Nobita"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "nobita@yahoo.com",
    fullname: {
        userfullname: {
            firstname: "Nitish",
            lastname: "kumar"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}
const obj4 = {5 : "a", 6: "b"}


// const obj3 = { obj1, obj2 }

// object assign => static method
// const obj3 = Object.assign(obj1, obj2)

// optional parameter
// const obj3 = Object.assign({}, obj1, obj2, obj4)


// Note: Most Used assign objects Using spread operator
const obj3 = {...obj1,  ...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "nitish1@gmail.com"
    },
    {
        id: 2,
        email: "nitish2@gmail.com"
    },
    {
        id: 3,
        email: "nitish3@gmail.com"
    },
    {
        id: 4,
        email: "nitish4@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// Note: Important
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // less use entires

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));





//-> ---------- Objects destructing and JSON API -------------


//-> Objects destructing

const course = {
    courseName: "javascript",
    price: '999',
    courseInstructor: "nitish"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);




//-> -- JSON Api---------

// {
//     "name": "codeWithNitish"
//     "courseName": "js in Hindi",
//     "price": "free"
// }


