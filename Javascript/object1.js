// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rohit",
    "full name": "Rohit Das",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)  // Output = rohit@google.com
console.log(JsUser["email"])  // Output = rohit@google.com
console.log(JsUser["full name"])  // Output = Rohit Das
console.log(JsUser[mySym])  // Output = mykey1

JsUser.email = "rohit@chatgpt.com"
Object.freeze(JsUser)  // Not to change the value use freeze


JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());  // Output = Hello JS user  // as a greeting


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());  // Output = Hello JS user, Rohit