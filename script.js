//Opdracht Deel A
// zet de functie om naar een arrow functie
// const ikRockArrowFunctions = function () {
//     console.log("Joe, ik rock de arrow functions!");
// };

const ikRockArrowFunctions2 = () => console.log("Joe, ik rock de arrow functions!")

// Opdracht B
// const fivePlusSeven = function () {
//     return 5 + 7
//   };

const fivePlusSeven = () => 5 + 7

// Opdracht C
const myFunction = (a, b) => a + b

// Opdracht D
const addFive = a => a + 5

// Opdracht E
createObject => ({ greeting: "hoi" })

function sum(a, b) {
    return a + b
}
// Arrowfunction:

let sum2 = (a, b) => a + b


function isPositive(number) {
    return number >= 0
}
// Arrowfunction:

let isPositive2 = number => number >= 0


function randomNumber() {
    return Math.random
}
// Arrowfunction:
let randomNumber2 = () => Math.random

document.addEventListener('click', function () {
    console.log('Click')
})
// Arrowfunctions:
document.addEventListener('click', () => console.log('Click'))