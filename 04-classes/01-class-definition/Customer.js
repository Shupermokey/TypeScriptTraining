"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
let myCUstomer = new Customer("Alex", "Sobieraj");
console.log(myCUstomer.firstName);
console.log(myCUstomer.lastName);
