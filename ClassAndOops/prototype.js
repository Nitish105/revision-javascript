let myName = "Nick      "
let myChannel = "jacky      "


// console.log(myName.length);  //4 

// console.log(myName.truelength());


// let myHeros = ["thor", "spiderMan"]

// let herosPower = {
//     thor: "hammer",
//     spiderMan: "sling",

//     getSpiderPower: function() {
//         console.log(`SpiderMan power is ${this.spiderMan}`);
//     }
// }

// Object.prototype.nick = function() {
//     console.log(`Nick is present in all objects`);
// }

// Array.prototype.heyNick = function() {
//     console.log(`Nick says hello`);
// }

// // herosPower.nick()

// // myHeros.nick()

// // herosPower.heyNick() // Not work - error


// // prototype inheritance
// // inheritance 

const User = {
    name: "nicky",
    email: "nicky@yahoo.com"
}

const Teacher = {
    makeVideo: true
}


const TeachingSupport = {
    isAvailable: false

}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JackyJon    ";

String.prototype.trueLength =  function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength()

"nicky".trueLength()

"jacky".trueLength()