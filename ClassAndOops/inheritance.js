class User {
    constructor(username) {
        this.username = username;
    }

    logIn() {
        console.log(`USERNAME is ${this.username}`);
    }
}


class Admin extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCarts() {
        console.log(`New category of items was added by ${this.username}`);
    }
}


const userOne = new Admin("Nick", "nick@gmail.com", "233")

// userOne.addCarts()
userOne.logIn()


const userTwo = new User("ridhi")
// userTwo.addCarts()

userTwo.logIn()


// console.log(userOne === userTwo);  // false
// console.log(userOne instanceof Admin);  // true
console.log(userOne instanceof User);  // true



