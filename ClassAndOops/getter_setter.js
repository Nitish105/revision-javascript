// getter and setter function

class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password() {
        return `${this._password}nick`
    }
    set password(value) {
        this._password = value
    }
}

const nick = new User("nick@yahoo.com", "123hl")
// console.log(nick.password);
console.log(nick.email);
