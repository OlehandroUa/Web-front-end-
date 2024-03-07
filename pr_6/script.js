class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log(`
        Визначення:
        Квадрат - це геометрична фігура, яка має чотири однакові сторони та чотири кути, що рівні 90 градусів.

        Основні Властивості:
        - Рівні Сторони: У квадрата всі чотири сторони рівні між собою. Це означає, що довжина будь-якої сторони квадрата дорівнює довжині будь-якої іншої сторони.
        - Прямокутні Кути: У квадрата кожен кут є прямим кутом, що має велике значення при вирішенні геометричних завдань та розрахунках.
        - Діагоналі: Діагоналі квадрата - це відрізки, які з'єднують протилежні вершини. У квадрата діагоналі рівні між собою та перпендикулярні.
        - Співпадаючі Бісектриси та Медіани: Бісектриси кутів та медіани (відрізки, які з'єднують кожну вершину з серединою протилежної сторони) у квадрата є співпадаючими.
        - Співпадаючі Катети: У квадрата катети (сторони, які утворюють прямий кут) також є рівні між собою.`);
    }

    length() {
        let result = this.a * 4;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a ** 2;
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини всіх 4 сторін = ${this.a};
        - величини всіх 4 кутів = 90°;
        - суму довжин сторін = ${this.length()};
        - площу ${this.square()}.`);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    get getA() {
        return this.a;
    }

    get getB() {
        return this.b;
    }

    set setA(a) {
        this.a = a;
    }

    set setB(b) {
        this.b = b;
    }

    static help() {
        console.log(`
        Визначення:
        Прямокутник - це геометрична фігура, яка характеризується чотирма прямими кутами та протилежними сторонами, які паралельні та рівні за довжиною.

        Основні Властивості:
        - Прямі кути: У прямокутнику кожний внутрішній кут має рівність 90 градусів, що робить його прямокутником.
        - Протилежні сторони рівні: Протилежні сторони прямокутника паралельні одна одній і мають однакову довжину. Це робить його рівнобедреним чотирикутником.
        - Паралельні сторони: Дві пари протилежних сторін прямокутника є паралельними, що означає, що вони ніколи не перетинаються.
        - Діагоналі: Прямокутник має дві діагоналі, які є відрізками, що з'єднують протилежні вершини. Діагоналі прямокутника мають однакову довжину і ділять його на дві рівні прямокутні трикутники.`);
    }

    length() {
        let result = this.a * 2 + this.b * 2;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a * this.b;
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини перших 2 сторін = ${this.a}, інших 2 сторін = ${this.b};
        - величини всіх 4 кутів = 90°;
        - суму довжин сторін = ${this.length()};
        - площу ${this.square()}.`);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log(`
        Визначення:
        Ромб - це чотирикутник, всі сторони якого мають однакову довжину.

        Основні Властивості:
        - Рівні сторони: У ромба всі чотири сторони мають однакову довжину. Це означає, що AB, BC, CD та DA - всі рівні між собою.
        - Кути: У ромба дві протилежні сторони паралельні, і всі кути однакові. Кожен кут ромба дорівнює 90 градусам.
        - Діагоналі: Діагоналі ромба мають специфічні властивості. Вони перетинаються під прямим кутом (точка перетину називається центром ромба), і кожна діагональ ділиться на дві рівні частини. Довжина кожної діагоналі може обчислюватися за допомогою теореми Піфагора.
        - Рівність відстаней: Відстані від будь-якої точки ромба до його двох протилежних сторін рівні.`);
    }

    length() {
        let result = this.a * 4;
        console.log(result);
        return result;
    }

    square() {
        let result = (this.a ** 2) * Math.sin(this.alpha);
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини всіх 4 сторін = ${this.a};
        - величини 2 тупих кутів = ${this.alpha}, гострих = ${this.beta};
        - суму довжин сторін = ${this.length()};
        - площу ${this.square()}.`);
    }
}

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }

    static help() {
        console.log(`
        Визначення:
        Паралелограм - це чотирикутник, у якого протилежні сторони паралельні та рівні.

        Основні Властивості:
        - Паралельність сторін: У паралелограма дві пари протилежних сторін паралельні одна одній. Це означає, що сторони AB і CD паралельні, так само як і сторони BC і DA.
        - Рівність сторін: Протилежні сторони паралелограма рівні за довжиною. Тобто, AB = CD і BC = DA.
        - Протилежні кути: Протилежні кути паралелограма рівні за мірою. Наприклад, кут A рівний куту C, і кут B рівний куту D.
        - Сума кутів: Сума всіх внутрішніх кутів паралелограма дорівнює 360 градусам. Отже, кут A + кут B + кут C + кут D = 360°.
        - Діагоналі: Діагоналі паралелограма - це відрізки, які з'єднують протилежні вершини. Діагоналі розділяють паралелограм на два рівні трикутники, і вони відноситься одна до одної як діагоналі ромба. Одна діагональ ділить паралелограм на два рівні паралелограми.`);
    }

    length() {
        let result = this.a * 2 + this.b * 2;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a * this.b * Math.sin(this.alpha);
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини перших 2 сторін = ${this.a}, інших 2 сторін = ${this.b};
        - величини 2 тупих кутів = ${this.alpha}, гострих = ${this.beta};
        - суму довжин сторін = ${this.length()};
        - площу ${this.square()}.`);
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square = new Square(5);
let rectangle = new Rectangle(5, 6);
console.log(rectangle.getA);
console.log(rectangle.getB);
console.log(rectangle.setA = 6);
console.log(rectangle.setB = 5);
let rhombus = new Rhombus(5, 120, 60);
let parallelogram = new Parallelogram(5, 6, 120, 60);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();
