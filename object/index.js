const person = {
    name : 'Nurkyz',
    age : 19,
    languages : ['kg', 'ru', 'en', 'kz'],
    isProgrammer : true,
    greet(){
console.log('greet from person')
    }
}
 person.languages.push('ar')

console.log(person)

const {name , age , languages} = person
console.log( name, age , languages)

  

for (const key in person) {
   console.log(key)
}


const lki =person.age + 10
console.log(lki)





const logger = {
    keys() {
        console.log('Object keys:' , Object.keys(this))
    },
    keyAndValues(){
        Object.keys(this).forEach(key => {
            console.log(`'${key}': ${this[key]}`)
        })
    }
}
logger.keyAndValues.call(logger)


