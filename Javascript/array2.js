const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Push
marvel_heros.push(dc_heros)
console.log(marvel_heros);  // Output = [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);  // Output = flash

// Concat
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);  // Output = [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);  //Output = [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  // Output = [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]  // All array in one array



console.log(Array.isArray("Hitesh"))  // Output = false  // To check it is array or not
console.log(Array.from("Rohit"))  // Output = [ 'R', 'o', 'h', 'i', 't' ]
console.log(Array.from({name: "Rohit"})) // []



let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  // Output = [ 100, 200, 300 ]