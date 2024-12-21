// Stack (Primitive) 

let myName = "Rohit Das"
let anotherName = myName
anotherName = "Ranit Das"

console.log(myName);  // Output = Rohit Das
console.log(anotherName);  // Output = Ranit Das



// Heap (Non-Primitive)

let userOne = {
    email: "rohit@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email);  // Output = user@google.com
console.log(userTwo.email);  // Output = user@google.com