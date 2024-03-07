function MyMathPower(b, n) {
    let r = b;
    for (let i = 1; i < n; i++) {
        r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
    return r;
}

const MyMathPowerDefault1 = (b = 2, n = 3) => MyMathPower(b, n);
const MyMathPowerDefault2 = (b = 2, n = 3) => MyMathPower(b, n);

MyMathPowerDefault1(3, 3);
MyMathPowerDefault1(3);
MyMathPowerDefault1(null, 3);
MyMathPowerDefault1();
MyMathPowerDefault2(4, 4);
MyMathPowerDefault2(4);
MyMathPowerDefault2(null, 4);
MyMathPowerDefault2();
