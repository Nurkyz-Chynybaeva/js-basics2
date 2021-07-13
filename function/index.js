// greet('Nurkyz')                    //В Function Declaration можно обращаться к функции когда угодно, и как угодно
// function greet(name){
//     console.log('hi', name)
// }

// const greet2 = function(name){
//     console.log('hi', name)
// }
// greet2('Salamat')                  //Function Expression не может нам дозволить такое 

// console.log(typeof greet2)         
// console.dir(greet)                                 //////

// let counter = 10
// const interval = setInterval(function(){
//     if (counter === 5){
// clearInterval(interval)
//     } else{
// console.log(--counter)
//     }
// }, 1000)



      //Arrou function

  const arrow= (name, age ) => {
      console.log('Привет - ' , name , age)
  }
  arrow('Nurkyz')

  const arrow2 = name => console.log('Привет - ' , name)
arrow2('Islam')

  const pow = num => num ** 2
  console.log(pow(5))                                                     // Степень с при помощи стрелочной функции

const sum = ( a, b) => a + b
console.log(sum(19, 21))                                                  // SUM


const sum2 = ( a=5, b=10, c=7) => a+ (b * c) -c;                          // Задали параметры по умолчанию
console.log(sum2())


function sumAll(...all){
  let result= 0
  for(let num of all){
    result += num
  }
  return result
}
const res = sumAll(1, 2, 3, 4, 5)
console.log(res)

// Замыкание


function creteMember(name){
  return function(lastName){
    console.log(name + lastName)
  }
}
const logWithLastName = createMember('')
console.log(logWithLastName('NurKyz'))
console.log(logWithLastName('Kunduz'))















