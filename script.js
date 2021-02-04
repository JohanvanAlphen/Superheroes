// [].find
// [].forEach
// [].some
// [].every
// [].includes
// [].map
// [].filter
// [].reduce

// Opdracht A
// Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman".
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie

const findSpiderMan = (array) => array.find(superhero => superhero.name === "Spiderman");
console.log(findSpiderMan(superheroes))
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// Opdracht B  
// Zorg dat je een array returned met de integers verdubbeld. 
//Gebruik de .forEach method of, een level hoger: de .map method.  

// .forEach function
// const doubleArrayValues = [1, 2, 3];
// doubleArrayValues.forEach(function (value, index, array) {
//     array[index] = value * 2;
// });

// .map function
const numbers = [1, 2, 3];
const doubleArrayValues = numbers.map(x => x * 2);

console.log(doubleArrayValues)
// result should be [2, 4, 6]

// Opdracht C
// Schrijf een JavaScript functie die checkt of er een nummer (integer) in de array aanwezig is dat groter is dan 10.
const numbers1 = [1, 4, 3, 6, 9, 7, 11];
const numbers2 = [1, 2, 1, 2, 1, 2];
const containsNumberBiggerThan10 = (array) => array.some(number => number > 10);

console.log(containsNumberBiggerThan10(numbers1))
console.log(containsNumberBiggerThan10(numbers2))
// containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// result should be true
// containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]})
// result should be false

// Opdracht D
// Schrijf een JavaScript functie die kijkt of er een bepaalde string: "Italy" in de array aanwezig is.
const countries = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];
const isItalyInTheGreat7 = (array) => array.includes('Italy');
console.log(isItalyInTheGreat7(countries))
//isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
// result should be true

// Opdracht E
// Schrijf een JavaScript functie die elke integer vertienvoudigt. 
// Gebruik .forEach.

const tenfold = [1, 4, 3, 6, 9, 7, 11];
tenfold.forEach(function (value, index, array) {
    array[index] = value * 10;
});
console.log(tenfold)
// result should be [10, 40, 30, 60, 90, 70, 110]

// Opdracht F
//Schrijf een JavaScript functie die checkt of alle waardes in de array onder de 100 zijn, en true or false retourneert.

const numbers3 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98];
const isBelow100 = (array) => array.some(number => number > 100);
console.log(isBelow100(numbers3))
// result should be: false

// Opdracht G
//Schrijf een JavaScript functie die alle waardes in de array bij elkaar optelt en het totaal van de som retourneert. 
//Gebruik de .reduce method. En echt, gebruik Google.

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(bigSum.reduce(reducer));
// result should be 1118