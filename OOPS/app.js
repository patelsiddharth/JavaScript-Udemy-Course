function PersonConst()
{
    this.name = "Siddharth";
}

const sidd = new PersonConst();
console.log(sidd.name);

function Person(name)
{
    this.name = name;
    this.age = 24;
}

const person1 = new Person('Name 1');
const person2 = new Person('Name 2');

console.log(person1);
console.log(`Person 1 : ${person1.name}`);

console.log(person2);
console.log(`Person 2 : ${person2.name}`);

function Car()
{
    this.name = "BMW";
    this.price = "Expensive";
    this.mfkYear = 2019;
    console.log(this);
}

const car = new Car();

// When we use this on global scope we get window object
console.log(this);

const name1 = "Sidd";
const name2 = new String('Sidd');

const personProtoTypes = 
{
    greeting : function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getMarried : function(lastName)
    {
        this.lastName = lastName;
    }
}

const mary =  Object.create(personProtoTypes);
mary.firstName = "Mary";
mary.lastName = 'Williams';
mary.age = 24;

console.log(mary.greeting());