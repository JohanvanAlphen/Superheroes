// Opdracht A
// Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. 
// Gebruik de .push method.

const addTheWordCool = function (array) {
    // add your code
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// Opdracht B
// Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

const amountOfElementsInArray = function (fruit) {
    return fruit.length;
}
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
// 3

// Opdracht C
// Schrijf een JavaScript functie om het éérste element uit een array te retourneren. 
// PS: Bij welk cijfer begint een array ook alweer met tellen?

const selectBelgiumFromBenelux = function (benelux) {
    return benelux[0];
}
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

// Opdracht D
// Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

const lastElementInArray = function (laatste) {
    return laatste[laatste.length - 1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

// Opdracht E
// Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . 
//Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

// Slice
const impeachTrumpSlice = function (array) {
    return (presidents.slice(1));
}

//Splice
const impeachTrumpSplice = function (array) {
    return (presidents.splice(1));
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

//Verschil; splice muteert de array

// Opdracht F
// Write a simple JavaScript program to join all elements of the following array into a string (with spaces).

const stringsTogether = function (array) {
    return array.join(" ");
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

// Opdracht G
// Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]))
// resultaat: [1,2,3,4,5,6]