class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()  // Output = USERNAME is chai
chai.addCourse()  // Output = A new course was added by chai

const masalaChai = new User("masalaChai")
masalaChai.logMe()  // Output = USERNAME is masalaChai


console.log(chai instanceof User);  // true