let name = 'Nurkyz'
console.log(name.length)
console.log(name.toLowerCase() )
console.log(name.toUpperCase() )
console.log(name.charAt(2))                   // найдет символ в этой позиции
console.log(name.indexOf('kyz'))              // найдет подстроку 
// console.log(name.startWith('Nu'))          // проверяет с какого индекса стартует строка
// console.log(name.endWith('kyz'))           // проверяет с какого индекса заканчивается строка


const srting= "    hi    how are you?    ";
// console.log(srting);
console.log(srting.trim());
console.log(srting.trimRight());      
console.log(srting.trimLeft());


function logPerson(s, name, age){
    if(age < 0){
        age = 'еще не родилась'
    }
    return ` ${s[0]}${name}${s[1]}${age}${s[2]}`
}

const PersonName = 'Jaina'
const PersonName2 = 'Sezim'
const PersonAge = 18
const PersonAge2 = -19

const output = logPerson`Имя: ${PersonName} , возраст: ${PersonAge} :)`
const output2 = logPerson`Имя: ${PersonName2} , возраст: ${PersonAge2} :)`

console.log(output)
console.log(output2)
