class Customer{
    firstName:string;
    lastName:string;

    constructor(theFirst: string, theLast:string)
    {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

let myCUstomer = new Customer("Alex", "Sobieraj");


console.log(myCUstomer.firstName);
console.log(myCUstomer.lastName);