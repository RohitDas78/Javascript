// const tinderUser = new Object()  // Singletone object

const tinderUser = {}  // Non-Singletone object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);  // Output = { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser));  // Output = [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // Output = [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));  // Output = [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // Output = true

//#######################################################//

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rohit",
            lastname: "das"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);  // Output = rohit

//#######################################################//

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);  // Output = { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);  // Output = { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);  // Output = { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//#######################################################//

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "rohit"
}

const {courseInstructor} = course
console.log(courseInstructor);  // Output = rohit

// {
//     "name": "rohit",
//     "coursename": "js in hindi",
//     "price": "free"   // API in json format
// }

[
    {},
    {},
    {}
]
