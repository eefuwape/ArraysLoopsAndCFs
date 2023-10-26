//====================================
// Part II: JavaScript Reps
//====================================
//1. Write a for loop that will log the numbers 1 through 20.
// for (let i = 1 ; i <= 20 ; i++){
//     console.log(i)
// }

//2. Write a for loop that will log only the even numbers in 0 through 200.
// for (let i=0 ; i <= 200 ; i+=2){
//     console.log(i)
// }

//3. Write a javascript application that logs all numbers from 1 - 100.

// for (let i = 1 ; i <= 100 ; i++){
        
//         if ( i % 3 === 0 && i % 5 === 0 ){
//             console.log('FizzBuzz') 
//         }
//         else if ( i % 3 === 0){
//             console.log('Fizz') 
//         }
//         else if (i % 5 === 0){
//             console.log('Buzz')
//         }
//         else {
//             console.log(i)
//         }

// }

//=================================
//Wild Wild Life
//=================================
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //1.Plantee just had her birthday; change Plantee's
// // array to reflect her being a year older.
// plantee[2] = 5001
// console.log(plantee)

// //2.Change Wolfy's hometown 
// //from "Yukon Territory" to "Gotham City"
// wolfy[3] = 'Gotham City'
// console.log(wolfy)

// //3.Give D'Art a second hometown by adding "Hawkins"
// dart.push('hawkins')
// console.log(dart)

// //4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" 
// //from the wolfyarray and replace it with "Gameboy".
// wolfy[0] = 'Gameboy'
// console.log(wolfy)

/////////////////////////////////////////////
// Yell at the Ninja Turtles
/////////////////////////////////////////

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// for (const turtle of ninjaTurtles) {
//     const upperCase = turtle.toUpperCase()
//     console.log(upperCase)
// }

/////////////////////////////////////////////////////////
// Methods, Revisted
//////////////////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

// console.log(favMovies.indexOf('Titanic'))

// 1. use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// console.log(favMovies.sort()) // yes, array is permanently changed

// 2. use pop method
// console.log(favMovies.pop())

// 3. push "Guardians of the Galaxy"

// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

// 4. reverse the array
// console.log(favMovies.reverse())

// 5. use shift method

// console.log(favMovies.shift())

// 6. unshift

// console.log(favMovies.unshift("Rat Race")) // returns the totla number of elements in the array

/* 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead 
of counting it yourself) Thought question: did this permanently alter our array? */

// let getIndex = favMovies.indexOf("Django Unchained")
// console.log(favMovies.splice(getIndex, 1, "Avatar")) // yes, array is altered permanently
// console.log(favMovies)

/* 8. slice the last half of the array (challenge yourself and try to programatically determine the middle 
of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array? */

let getHalf = Math.floor(favMovies.length) / 2
// console.log(favMovies.slice(getHalf, favMovies.length - 1))

// 9. 
const halfMovies = favMovies.slice(getHalf)
console.log(halfMovies)

console.log(halfMovies.indexOf('Fast and Furious'))


//====================================
// Part II: JavaScript Reps
//====================================
//1. Write a for loop that will log the numbers 1 through 20.
// for (let i = 1 ; i <= 20 ; i++){
//     console.log(i)
// }

//2. Write a for loop that will log only the even numbers in 0 through 200.
// for (let i=0 ; i <= 200 ; i+=2){
//     console.log(i)
// }

//3. Write a javascript application that logs all numbers from 1 - 100.

// for (let i = 1 ; i <= 100 ; i++){

//         if ( i % 3 === 0 && i % 5 === 0 ){
//             console.log('FizzBuzz') 
//         }
//         else if ( i % 3 === 0){
//             console.log('Fizz') 
//         }
//         else if (i % 5 === 0){
//             console.log('Buzz')
//         }
//         else {
//             console.log(i)
//         }

// }

//=================================
//Wild Wild Life
//=================================
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// //1.Plantee just had her birthday; change Plantee's
// // array to reflect her being a year older.
// plantee[2] = 5001
// console.log(plantee)

// //2.Change Wolfy's hometown 
// //from "Yukon Territory" to "Gotham City"
// wolfy[3] = 'Gotham City'
// console.log(wolfy)

// //3.Give D'Art a second hometown by adding "Hawkins"
// dart.push('hawkins')
// console.log(dart)

// //4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" 
// //from the wolfyarray and replace it with "Gameboy".
// wolfy[0] = 'Gameboy'
// console.log(wolfy)

/////////////////////////////////////////////
// Yell at the Ninja Turtles
/////////////////////////////////////////

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// for (const turtle of ninjaTurtles) {
//     const upperCase = turtle.toUpperCase()
//     console.log(upperCase)
// }

/////////////////////////////////////////////////////////
// Methods, Revisted
//////////////////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

// console.log(favMovies.indexOf('Titanic'))

// 1. use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// console.log(favMovies.sort()) // yes, array is permanently changed

// 2. use pop method
// console.log(favMovies.pop())

// 3. push "Guardians of the Galaxy"

// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

// 4. reverse the array
// console.log(favMovies.reverse())

// 5. use shift method

// console.log(favMovies.shift())

// 6. unshift

// console.log(favMovies.unshift("Rat Race")) // returns the totla number of elements in the array

/* 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead 
of counting it yourself) Thought question: did this permanently alter our array? */

// let getIndex = favMovies.indexOf("Django Unchained")
// console.log(favMovies.splice(getIndex, 1, "Avatar")) // yes, array is altered permanently
// console.log(favMovies)

/* 8. slice the last half of the array (challenge yourself and try to programatically determine the middle 
of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array? */

// let getHalf = Math.floor(favMovies.length) / 2
// console.log(favMovies.slice(getHalf, favMovies.length - 1))

// 9. 
// const halfMovies = favMovies.slice(getHalf)
// console.log(halfMovies)

// console.log(halfMovies.indexOf('Fast and Furious'))

//====================================================================

//Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
// ["Lucinda", "Jacc", "Neff", "Snoop"],
// ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo)

//Change "Neff" to "No One"

// console.log(whereIsWaldo.indexOf("Neff"))
// console.log(whereIsWaldo[1][2])

// whereIsWaldo[1][2] = "No One"
// console.log(whereIsWaldo[1][2])

//Access and console.log "Waldo"

// console.log(whereIsWaldo[2][1][1])

//===================================================================

//Excited Kitten

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// for(let i = 1; i <= 20; i++){
//     console.log("Love me, pet me! HSSSSSS!")
// }

//For every even number in your loop, log
//"...human...why you taking pictures of me?...", "...the catnip made me do it...", 
//or "...why does the red dot always get away..." at random.

// let messages = [
//     "...human...why you taking pictures of me?...", 
//     "...the catnip made me do it...", 
//     "...why does the red dot always get away..."
// ]

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(messages[Math.floor(Math.random() * messages.length)])
//     }
//     else{
//         console.log(i + " Love me, pet me! HSSSSSS!")
//     }
// }

//==============================================================================

//Find the Median

//Find the median number in the following nums array, then console.log that number.

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// nums.sort()
// console.log(nums)

// let median = Math.floor(nums.length / 2)

// console.log(nums[median])

//=========================================================================================

