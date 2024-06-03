// const user = {
//     username: "nick",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         // console.log(this); // current instance of object
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);    //{} -> empty in nodejs




function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this;  // by default 
}


const userOne = new User("Tony Stark", 11, true)
const userTwo = new User("Jack", 12, true)

// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);


