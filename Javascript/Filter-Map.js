//########################## filter #############################//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {  // Use filter
    return num > 4
} )
console.log(newNums);  // Output = [ 5, 6, 7, 8, 9, 10 ]

//#######################################################//

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// using filter statement to print all history books
  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);


//   using filter statement to print history book which is publish after 1985
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1985 && bk.genre === "History"
})
  console.log(userBooks);

//######################### Maps ##############################//

const map1 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // Don't repeate same value in output

console.log(map1);  // Output = 'IN' => { 'India', 'USA' => 'United States of America', 'Fr' => 'France' }


for (const [key, value] of map1) {
    console.log(key, ':-', value);
}  // Output = IN :- India, USA :- United States of America, Fr :- France 

//#######################################################// 

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums2 = myNumers.map( (num) => { 
    return num + 10  // add 10 in the all elemen of the array
})
console.log(newNums2);  // Output [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// multiple map and filter in one line 
const newNums1 = myNumers
                .map((num) => num * 10 )  // [10,20,30,40,50,60,70,80,90,100]
                .map( (num) => num + 1)  // [11,21,31,41,51,61,71,81,91,101]
                .filter( (num) => num >= 40)  // [41,51,61,71,81,91,101]

console.log(newNums1);  // Final Output = [41,51,61,71,81,91,101]