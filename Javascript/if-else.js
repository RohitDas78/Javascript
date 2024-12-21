//########################### if ############################//

// const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}  // Output = temperature is greater than 50

// <, >, <=, >=, ==, !=, ===, !==

//#######################################################//

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);  // Output = User power: fly
}
// console.log(`User power: ${power}`);

//#######################################################//

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  // Output = test, test2

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");   
} else {
    console.log("less than 1200");  // Output = less than 500
}

//#######################################################//

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {  // AND operation (all condition must be true)
    console.log("Allow to buy course");
}  // Output = Allow to buy course

//#######################################################//

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {   // OR operation (one of the condition must be true)
    console.log("User logged in");
}  // Output = User logged in