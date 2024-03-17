// Варіант 2

// Функція для обчислення площі трикутника
function triangleArea(base = 7, height = 3) {
    console.log(base * height);
}

// Приклади використання функції
triangleArea(3, 6);
triangleArea();

// Клас для представлення човна
function Boat(color, avgSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

// Додавання методу до прототипу класу Boat
Boat.prototype.assignCaptain = function (name, yearsOfExperience, hasFamily) {
    this.captainName = name;
    this.yearsOfExperience = yearsOfExperience;
    this.hasFamily = hasFamily;
};

// Створення екземпляру човна і виклик методу
let boat = new Boat("orange", 320, 20, "Mercedes-Benz", "Poland");
console.log(boat);
boat.assignCaptain("Ivan Rokytskyi", 4, true);
console.log(boat);

// Клас для представлення простого кола
class SimpleCircle {
    constructor(radius) {
        this.radius = radius;
    }

    // Сеттер для радіуса
    set setRadius(radius) {
        this.radius = radius;
    }
}

// Клас для представлення простої еліпси
class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    // Статичний метод для обчислення площі еліпса
    static computeArea(majorRadius, minorRadius) {
        return Math.PI * majorRadius * minorRadius;
    }

    // Метод для обчислення площі еліпса
    computeArea() {
        return Math.PI * this.radius * this.minorRadius;
    }
}

// Створення екземпляру кола та еліпса і виклик методів
let simpleCircle = new SimpleCircle(5);
console.log(simpleCircle);
let simpleEllipse = new SimpleEllipse(5, 10);
console.log(simpleEllipse);
console.log(simpleEllipse.computeArea());

// Функція-генератор для віднімання числа з певним значенням
function subtractGenerator(a) {
    return function (b) {
        return a - b;
    };
}

// Створення функцій-генераторів і їх виклики
let subtractFiveGenerator = subtractGenerator(5);
console.log(subtractFiveGenerator(3));

let subtractThreeGenerator = subtractGenerator(3);
console.log(subtractThreeGenerator(1));
