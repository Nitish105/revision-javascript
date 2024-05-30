const User = {
    _email: 'harry@yahoo.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const harry = Object.create(User)
console.log(harry.email);