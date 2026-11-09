// Logical "AND" 
console.log(false && true) // all values have to be TRUE for expression to be TRUE
 
console.log(true || false) // any value have to be TRUE for expression to be TRUE

var ageMoreThanEighteen = true
var isUsCitizen = true

var eligibilityForDriverLicense = ageMoreThanEighteen && isUsCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense)

// Logical "NOT"
console.log(!true)
console.log(6 !== 10)