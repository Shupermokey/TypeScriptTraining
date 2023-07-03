class CustomerFour{

    constructor(private _firstName: string, private _lastName:string)
    {
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value:string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value:string){
        this._lastName = value;
    }

}


let myCustomers2 = new CustomerFour("Alex2", "Sobieraj2");


console.log(myCustomers2.firstName);
console.log(myCustomers2.lastName);