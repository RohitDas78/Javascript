function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");  // Output = called
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// createUser { username: 'chai', email: 'chai@fb.com', password: '123' }