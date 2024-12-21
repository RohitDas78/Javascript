const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this = current context
        console.log(this);
    }
}
user.welcomeMessage()  // Output = rohit , welcome to website

user.username = "sam"
user.welcomeMessage()  // Output = sam , welcome to website

console.log(this);  // Output = {}  empty

//#######################################################//

function chai(){
    let username = "rohit"
    console.log(this.username);
}
chai()  // Output = undefined

//#######################################################//

const chai =  () => {
    let username = "rohit"
    console.log(this);
}
chai()  // Output = {}

//#######################################################//

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))  // Output = 7


// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4))  // Output = 7


// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4))  // Output = 7


// const addTwo = (num1, num2) => ({username: "rohit"})
// console.log(addTwo(3, 4))  // Output = { username: 'rohit' }