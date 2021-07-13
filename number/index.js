// NUMBER

const number1 = 20; //integer
const number2 = 20.20 //float
const pow = 20e3
const st = "joj"

const strInNumber1 = "20";
const strFloNumber2 = "20.20";


console.log(number1, number2 , pow);
console.log(Number.NaN); // считается числом
console.log(typeof NaN) // так можно проверить типы данных в js

console.log(parseInt(strInNumber1) + 2)
console.log(parseFloat(strFloNumber2) + 2)


//BigInt

console.log(typeof 999999090909290849898985980n)

// console.log(89375783945.7689n) error
// console.log(10n - 9)           error

console.log(parseInt(10n) - 9)                          
console.log(10n - BigInt(4))                            //true



//Math
console.log(Math.sqrt(25))                              // sqrt- корень
console.log(Math.pow(5, 3))                             // pow- степень
console.log(Math.abs(-90))                              // abs- модуль
console.log(Math.max(42, 12, 33, 97))                   //max
console.log(Math.min(42, 12, 33, 97 ))                  //min
console.log(Math.round(5.4))                            // округляет
console.log(Math.floor(20.7))                           // округляет на меньшию сторону
console.log(Math.ceil(20.2))                            // округляет на большую сторону

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min - 1 ) + min)
}
console.log(getRandom(90, 50))                          //Рандомное число










