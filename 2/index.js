// const year = 19;

// function calc(year){
//     return 2021 - year
// }
// console.log(calc(2002));

// var isPalindrome = function (string) {
//     if (string == string.split('').reverse().join('')) {
//         alert(string + ' is palindrome.');
//     }
//     else {
//         alert(string + ' is not palindrome.');
//     }
// }

// document.getElementById('form_id').onsubmit = function() {
//    isPalindrome(document.getElementById('your_input').value);
// // }

// function palindrome(words) {

//     return words == words.split("").reverse().join("")

//     if(palindrome){
//    return true;
//     } 

//     else{
//         return false;
//     }
    
// };

// alert(palindrome("азиза"));


function isItPalindrome(inputString) {
    
    return inputString == inputString.split("").reverse().join("")
    
    if(inputString){
        return true;
        
    }
    else{
        return false;
    }
};


console.log(isItPalindrome("заказ"));



// let name = true;

// if(name){
//     console.log('Все прошло успешно :)')
// }
// else{
//     console.log('Возникли некоторые проблемы :(')
// }

// name ? console.log('Все прошло успешно :)') : console.log('Возникли некоторые проблемы :(')   // тернарное выражение