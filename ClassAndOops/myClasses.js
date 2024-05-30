// ES6 

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const userOne = new User("Radha", "radha@yahoo.com", "1234")

// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());


// behind the scene of classes works

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const userTwo = new User("nitish", "nitish@gmail.com", "123")

console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());



