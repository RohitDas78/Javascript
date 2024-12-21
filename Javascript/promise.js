const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})  // Create promise

promiseOne.then(function(){
    console.log("Promise consumed");
})  // Consumed promise

//#######################################################//

// Not store promise in variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)  // Create promise

}).then(function(){
    console.log("Async 2 resolved");
})  // Consumed promise

//#######################################################//

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Rohit", email: "rohit@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})  // Output = { username: 'Rohit', email: 'rohit@example.com' }

//#######################################################//

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "rohit", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//#######################################################//

// async-await  in promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//#######################################################//

// async-await  in promise  // Try-Catch syntax
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

//#######################################################//

// using .then .catch to access all github information
fetch('https://api.github.com/users/RohitDas78')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.