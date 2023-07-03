"use strict";
class CustomerThree {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomers = new CustomerThree("Alex", "Sobieraj");
console.log(myCustomers.firstName);
console.log(myCustomers.lastName);
