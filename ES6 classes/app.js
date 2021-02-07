class Person1
{
    constructor(fn,ln)
    {
        this.fn = fn;
        this.ln = ln;
    }
    greeting()
    {
        return `Hello there ${this.fn} ${this.ln}`;
    }
    
    static addNumber(x,y)
    {
        return x+y;
    }
}

const sidd = new Person1('Siddharth', 'Patel');
console.log(sidd);
console.log(sidd.greeting());

console.log(Person1.addNumber(10,20));

// Inheritance in ES6

class Person
{
    constructor(firstName, lastName) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting()
    {
        console.log(`Hello there, ${this.firstName} ${this.lastName}`)
    }
    static membershipFunc()
    {
        return 100;
    }
}

class Customer extends Person
{
    constructor(firstName, lastName, age, membership) 
    {
        super(firstName,lastName);
        this.age = age;
        this.membership = membership;
    }
    static membershipFunc()
    {
        return 900;
    }
}

const john = new Customer('John', 'Cena', 25, 'Premium');
console.log(john);
//const per = new Person('Randy', 'Ortan');
john.greeting();
console.log(Customer.membershipFunc());
console.log(Person.membershipFunc());