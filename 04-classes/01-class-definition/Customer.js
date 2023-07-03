var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCUstomer = new Customer("Alex", "Sobieraj");
console.log(myCUstomer.firstName);
console.log(myCUstomer.lastName);
