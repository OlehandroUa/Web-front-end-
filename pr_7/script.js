// Створення трикутника зі значеннями за замовчуванням а, b, c
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

console.log("=== Triangular ===");
console.log("Default Triangular:", Triangular());
console.log("Custom Triangular:", Triangular(6, 7, 8));
console.log("Another Triangular:", Triangular(9, 10, 11));

console.log("\n=== Pi Multiplier ===");
// Функція для множення числа на PI
function PiMultiplier(num) {
    return function () {
        return Math.PI * num;
    };
}

let PiMultipliedBy2 = PiMultiplier(2);
let PiMultipliedBy2To3 = PiMultiplier(2 / 3);
let PiDividedBy2 = PiMultiplier(1 / 2);

console.log("Pi multiplied by 2:", PiMultipliedBy2());
console.log("Pi multiplied by 2/3:", PiMultipliedBy2To3());
console.log("Pi divided by 2:", PiDividedBy2());

console.log("\n=== Painter ===");
// Функція для фарбування
function Painter(color) {
    console.log("Start Painting!");
    return function (obj) {
        console.log(`Paint Color: ${color} | Type: ${(obj.type === undefined) ? "No type" : obj.type}`);
    };
}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

let bmw = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
};

let man = {
    type: "Truck",
    "avg speed": 280,
    "load capacity": 2400,
};

let motoblock = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
};

console.log("\nPainting Details:");
PaintBlue(bmw);
PaintRed(man);
PaintYellow(motoblock);
