"use strict";
class CustomerFour {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
let myCustomers2 = new CustomerFour("Alex2", "Sobieraj2");
console.log(myCustomers2.firstName);
console.log(myCustomers2.lastName);
