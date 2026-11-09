// Declarative function
helloOne() // could invoke befor or after the function
function helloOne () {
    console.log('Hallo one')
}
helloOne()

// anonymous function
var helloTwo = function() {
    console.log('Hallo two')
}
helloTwo() // can just invoke after the function

// ES6 function syntax or arrow function
var helloThree = () => { 
    console .log('Hallo three')
}
helloThree()

// function with arguments
function printName (name, lastName) {
    console.log(name +' '+lastName)
}
printName('Omar', 'Katter') 

// Function with return
function multiplyByTwo (number) {
    var result = number * 2
    return result;
}
var myResult = multiplyByTwo(20)
console.log(myResult)

// import function
import {printAge} from '../helpers/printHelper.js'
printAge(33)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(55)

