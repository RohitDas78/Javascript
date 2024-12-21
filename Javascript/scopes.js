var c = 300

let a = 300  // Global scope
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);  // Output = 10  // Block scope
}

console.log(a);
console.log(b);
console.log(c);

//#######################################################//

function one(){
    const username = "rohit"

    function two(){
        const website = "youtube"
        console.log(username);  // Output = rohit
    }
    // console.log(website);

     two()
}
one()

//#######################################################//

if (true) {
    const username = "rohit"
    if (username === "rohit") {
        const website = " youtube"
        console.log(username + website);  // Output = rohit youtube
    }
    // console.log(website);
}
// console.log(username);

//########################### interesting ############################//

function addone(num){  
    return num + 1  
}
console.log(addone(5))  // Output = 6


addTwo(5)
const addTwo = function(num){
    return num + 2
}  // Error //