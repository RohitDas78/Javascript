let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//#######################################################//

Object.prototype.rohit = function(){
    console.log(`rohit is present in all objects`);
}

Array.prototype.heyRohit = function(){
    console.log(`Rohit says hello`);
}

heroPower.rohit()  // Output = rohit is present in all objects
myHeros.rohit()  // Output = rohit is present in all objects
myHeros.heyRohit()  // Output = Rohit says hello
// heroPower.heyRohit()

//##########################  inheritance #############################//

const User = {
    name: "chai",
    email: "chai@google.com"
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

//######################## true length ###############################//

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);  // Output = ChaiAurCode
    console.log(`True length is: ${this.trim().length}`);  // Output = True length is: 11
}

anotherUsername.trueLength()
"rohit".trueLength()  // Output = rohit, True length is: 5
"iceTea".trueLength()  // Output = iceTea, True length is: 6