// Loops

// console.log("Hallo world")
// console.log("Hallo world")
// console.log("Hallo world")
// console.log("Hallo world")
// console.log("Hallo world")

// for (Statement1; Statement2; Statement3) {

//};
// for loop or (for i loop)
for(let i=0; i<5; i++){
console.log('HEllo World ' + i)
}

// for of loop
var cars = ["Volvo", "Toyota", "Tesla" ]

for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break;
    }
}

// ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
}
)