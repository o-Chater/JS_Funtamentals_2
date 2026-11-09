// conditional Statement

// if(conditional) {
//     // exicute some code here
// }else{
//     // exicute some code here
// }

// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening


var hour = 10

if (hour >= 6 && hour < 12) {
    console.log("Good Morning")
} else if (hour >=12 && hour <18) {
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}


var ageMoreThanEighteen = true
var isUsCitizen = true

if (ageMoreThanEighteen && isUsCitizen) {
    console.log('Customer is eligible for DL')
} else {
    console.log('Customer ist NOT eligible for DL')
}