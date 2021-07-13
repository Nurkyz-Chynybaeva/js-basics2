const friends = ['Jaina' , 'Sezim', 'Chinara', 'Jasmin', 'Asylai', 'Tahmina', ];



// Method
friends.push('Alisher')                                                     // добавляет в начало
friends.unshift('Kubat')                                                    // добавляет в конец
friends.pop()                                                               // удаляет последний элемент из массива
friends.shift()                                                             // удаляет первый элемент из массива




           // Первая задача

 const text = 'Привет, мы изучаем JavaScript'    
 const reverseText = text.split('').reverse().join('')                      
 console.log(reverseText)      

const index = friends.indexOf('Jasmin')                                      // Заменили одну элемент на другую          
friends[index] = 'Kunduz'
console.log(friends)









const people = [
    {name : 'Nurkyz' , budget : 99099990090},
    {name : 'Jaina' , budget : 88889990090},
    {name : 'Sezim' , budget : 78999990090},
]


let findPerson                                                
for (const person of people){
    if (person.budget === 99099990090){                                      // использовали цикл чтобы найти объект
        findPerson = person                                                  // метод for of проходит именно по значению массива
    }
}
console.log(findPerson)




const person = people.find(function(person){
    return person.budget === 99099990090
})
console.log(person)

console.log(friends.includes('Chinara'))                                      // Проверяет, есть ли элемент в массиве





// method map


const numbers = [ 1, 2, 3, 4, 5, 6, 7]

const pow4 = numbers.map(numbers => numbers ** 2)
console.log(pow4)                                                             // Метод MAP проходит и по индексу, и по значению массива


const fruits = ['apple', 'bananas', 'orange', 'popetos', 'cabbages', 'kivi', 'lemon']
const ToUpperCase = fruits.map(fruits => {
   return fruits.ToUpperCase()
})

console.log(ToUpperCase)

























