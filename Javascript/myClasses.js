class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}`
    }
    changeUsername(){
        return `${this.username}`
    }  
    userEmail(){
        return `${this.email}`
    }
}

const chai = new User("rohit", "chai@gmail.com", "123")

console.log(chai.encryptPassword());  // Output = 123
console.log(chai.changeUsername());  // Output = rohit
console.log(chai.userEmail());  // Output = chai@gmail.com


//#######################################################// 

// behind the scene  // without use class

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}`
}
User.prototype.changeUsername = function(){
    return `${this.username}`
}
User.prototype.userEmail = function(){
    return `${this.email}`
}

const tea = new User("ranit", "tea@gmail.com", "123")

console.log(tea.encryptPassword());  // Output = 123
console.log(tea.changeUsername());  // Output = ranit
console.log(tea.userEmail());  // Output = tea@gmail.com