// call and this usage 

// example
function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}


function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email =  email
    this.password = password
}

const userOne = new createUser("tarak", "tarak@instagram.com", "1234")

console.log(userOne); 