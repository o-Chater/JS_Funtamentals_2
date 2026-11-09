// contatination and interpolation
var price = 50
var itemName = "Cup"
var messageToPrint = "The price fpr your cup is 50 Dollars"
var messageToPrint = "The price for your "+itemName+ " is "+price+" Dollars" // contatination= Verkettung
var messageToPrint2 = `the price for your ${itemName} is ${price} Dollars`  // interpolain= Einbettung

console.log(messageToPrint)
console.log(messageToPrint2)

