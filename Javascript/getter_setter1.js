// Use class to create getter and setter
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }

    get password(){
        return this._password
    }
    set password(value){
        this._password = value
    }
}

const rohit = new User("h@rohit.ai", "abc")
console.log(rohit.email);  // Output = h@rohit.ai
console.log(rohit.password);  // Output = abc