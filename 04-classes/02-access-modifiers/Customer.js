var CustomerTwo = /** @class */ (function () {
    function CustomerTwo(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(CustomerTwo.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerTwo.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerTwo;
}());
var myCustomer = new CustomerTwo("Alex", "Sobieraj");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
