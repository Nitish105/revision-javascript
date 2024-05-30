// static properties

class User {
    constructor(username){
        this.username = username
    }

    logIn(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const rakesh= new User("rakesh")
console.log(rakesh.createId())

class Admin extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Admin("iphone", "i@phone.com")
console.log(iphone.createId());
