console.log("learning about objects");

const car = {
    color: "red",
    year: "2015",
    make: "Ford",
    model: "Mustang",
}
console.log(car);

const animals = [ "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];
console.log(animals);

const dad = {
    name: "Jim"
}

const mom = {
    name: "Helen"
}

const sister = {
    name: "Sarah"
}

const brother = {
    name: "Bobby"
}

const familyMembers = [dad, mom, sister, brother]

console.log("familyMembers", familyMembers);

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height, wardrobe.manufacturer, wardrobe.contents, wardrobe.contents[0], wardrobe.contents[1], wardrobe.contents[2], wardrobe.contents[3], wardrobe.contents[4], wardrobe.depth, wardrobe.width);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`${empireStateBuilding.stories}`, `${empireStateBuilding.height}`, 
    `${empireStateBuilding.squareFeet}`, `${empireStateBuilding.eastWestLength}`, `${empireStateBuilding.northSouthLength}`);


empireStateBuilding['address']
const buildingAdd = 'address'
console.log(empireStateBuilding[buildingAdd]);

empireStateBuilding['constructionDate'];
const buildingDate = 'constructionDate'
console.log(empireStateBuilding[buildingDate]);

empireStateBuilding['cost'];
const buildingCost = 'cost'
console.log(empireStateBuilding[buildingCost]);


empireStateBuilding['owner'];
const buildingOwn = 'owner'
console.log(empireStateBuilding[buildingOwn]);

empireStateBuilding['architect'];
const buildingArch = 'architect'
console.log(empireStateBuilding[buildingArch]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

let fullTimeKey = 'fullTime';
let partTimeKey = 'partTime';
console.log(nashvilleSoftwareSchool.instructors[fullTimeKey], nashvilleSoftwareSchool.instructors[partTimeKey]);

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);

// Practice Exercise

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(beatles.members[1].name, "was in the Beatles from 1960 to 1970. He was born in", beatles.members[1].birth, "He contributed heavily to the",
 beatles.albums[3], '.');