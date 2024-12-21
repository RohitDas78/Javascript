const user = {
    username: "Rohit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);  // Output = Rohit
        console.log(this);  // Output = username: "Rohit", loginCount: 8, signedIn: true
    }

}
console.log(user.username)  // Output = Rohit
console.log(user.getUserDetails());  // give all the details
console.log(this);  // Output = {}

//#######################################################//

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
const userOne = new User("Rohit", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);