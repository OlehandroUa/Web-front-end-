const arr1 = [
    1,
    5,
    9,
    4,
    { name: "Ivan", mark: -1, subject: "JS" },
    function (number) {
        return number ** 4;
    },
    function (object) {
        console.log(object.name);
    },
    -6,
    14,
];

console.log("Elements of arr1:");
arr1.forEach((value) => {
    console.log(value);
});

arr1.splice(1, 1, 8);

arr1.splice(3, 0, "Hello");

const arr2 = arr1.slice(6, 8);

console.log("Elements of arr2:");
arr2.forEach((elem) => {
    console.log(elem);
});

const arr3 = arr1.slice(0, 3);

console.log("Elements of arr3:");
arr3.forEach((elem) => {
    console.log(elem);
});

const arr3Reversed = arr3.reverse();

console.log("Reversed elements of arr3:");
arr3Reversed.forEach((elem) => {
    console.log(elem);
});

console.log("Index of -6 in arr1:", arr1.indexOf(-6));

console.log("Elements of arr1 greater than 4:", arr1.filter((elem) => elem > 4));

arr1[7](arr1[5]);

console.log("Result of the function on -6:", arr1[6](-6));

console.log("Elements of arr1 using for...in:");
for (const index in arr1) {
    console.log(arr1[index]);
}

console.log("Properties of arr1[5] using for...in:");
for (const key in arr1[5]) {
    console.log(arr1[5][key]);
}

console.log("Elements of arr1 using for...of:");
for (const elem of arr1) {
    console.log(elem);
}

arr1.version = "1.0.0";

console.log("Properties and values of arr1 using for...in:");
for (const index in arr1) {
    console.log(arr1[index]);
}

console.log("Elements of arr1 using for...of:");
for (const elem of arr1) {
    console.log(elem);
}

const Petryk = { name: "Petryk", skill: "JS", level: "junior" };
const Mychajlyk = { name: "Mychajlyk", skill: "HTML/CSS", level: "middle" };
const Volodyk = { name: "Volodyk", skill: "TS", level: "trainee" };

const map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

console.log("Volodyk's details:", map1.get("Volodyk"));

console.log("Keys of map1:");
for (const key of map1.keys()) {
    console.log(key);
}

map1.delete("Mychajlyk");

console.log("Details of each person in map1:");
for (const person of map1.values()) {
    console.log(`${person.name} is ${person.level} in ${person.skill}`);
}

const set1 = new Set();
set1.add(Petryk);
set1.add(Mychajlyk);
set1.add(Volodyk);

const Antypko = { name: "Antypko", skill: "PHP", level: "senior" };

console.log("Does set1 have Antypko?", set1.has(Antypko));

console.log("Does set1 have Mychajlyk?", set1.has(Mychajlyk));

console.log("Elements of set1:");
for (const elem of set1) {
    console.log(elem);
}

set1.delete(Volodyk);

console.log("Details of each person in set1:");
for (const person of set1) {
    console.log(`${person.name} is ${person.level} in ${person.skill}`);
}
