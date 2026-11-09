export function printAge (age) {
    console.log(age)
}

class CustomerDetails {

    
    printFirstName (firstName) {
        console.log(firstName)
    }
/**
 * this provides the last name of the customer
 * @param {string} lastName 
 */
    printLastName (lastName) {
        console.log(lastName)   
    }
}

export var customerDetails = new CustomerDetails()