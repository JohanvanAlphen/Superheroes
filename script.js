// [].map
// [].filter
// [].reduce

const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]
// Opdracht 1; Maak een array van alle superhelden namen

superheroes.map((hero) => {
    console.log(hero.name);
})

// Opdracht 2; Maak een array van alle "lichte" superhelden (< 190 pounds)

const superheroLight = superheroes.filter((hero) => {
    return hero.weight <= 190;
})
console.log("Superheroes die minder wegen dan 190kg", superheroLight)

// Opdracht 3; Maak een array met de namen van de superhelden die 200 pounds wegen

const superhero200 = superheroes.filter((hero) => {
    return hero.weight == 200;
})
    // Chain
    .map((hero) => {
        return hero.name
    })
console.log("Superheroes die precies 200kg wegen", superhero200)

// Opdracht 4; Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

superheroes.map((hero) => {
    console.log((hero.name), ", 1e optreden in", (hero.first_appearance));
})

// Opdracht 5; Maak een array met alle superhelden van DC Comics

const superheroDC = superheroes.filter((hero) => {
    return hero.publisher == "DC Comics"
})
    .map((hero) => {
        return hero.name
    })
console.log("In DC Comics ", superheroDC)

const superheroMarvel = superheroes.filter((hero) => {
    return hero.publisher == "Marvel Comics"
})
    .map((hero) => {
        return hero.name
    })
console.log("In Marvel ", superheroMarvel)

// Opdracht 6; Tel het gewicht van alle superhelden van DC Comics bij elkaar op

const superheroDCTotalWeight = superheroes.filter((hero) => {
    return hero.weight !== "unknown" && hero.publisher == "DC Comics"
}).reduce((currentTotal, hero) => {
    return parseInt(hero.weight) + currentTotal;
}, 0);
console.log("De superhelden van DC Comics wegen bij elkaar ", (superheroDCTotalWeight))

// Opdracht 7; Tel het gewicht van alle superhelden van Marvel Comics bij elkaar op

const superheroMarvelTotalWeight = superheroes.filter((hero) => {
    return hero.weight !== "unknown" && hero.publisher == "Marvel Comics"
}).reduce((currentTotal, hero) => {
    return parseInt(hero.weight) + currentTotal;
}, 0);
console.log("De superhelden van Marvel Comics wegen bij elkaar ", (superheroMarvelTotalWeight))

// Opdracht 8; zoek de zwaarste superheld (BONUS)

const heaviestHero = superheroes.filter((hero) =>
    (hero.weight !== "unknown")).reduce((highestWeight, hero) => {
        if (parseInt(hero.weight) > highestWeight) {
            highestWeight = parseInt(hero.weight);
        };
        return highestWeight
    }, 0);
console.log("De zwaarste Superhero weegt", heaviestHero, "kg")