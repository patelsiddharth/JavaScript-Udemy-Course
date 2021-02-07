let a,b;
[a,b] = [100,200];
console.log(a);
console.log(b);

//rest pattern
[a, b, c, ...rest] = [10,20,30,40,50,60,70,80,90];
console.log(rest);

({a, b} = {a : 10, b : 20, c : 30, d : 40, e : 50});
({a, b, ...rest} = {a : 10, b : 20, c : 30, d : 40, e : 50});
console.log(rest);

//Array destructoring
people = ['John','Beth','Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

function GetPeople()
{
    return ['John','Beth','Mike'];
}
let p1,p2,p3;
[p1,p2,p3] = GetPeople();
console.log(p1,p2,p3);

//Object Destructoring

const person = {
    name : 'John',
    age : 24,
    city : 'Miami',
    gender : 'Male'
}

//old es5 
const name1 = person.name,
      age1 = person.age;

const {name, age, city} = person;
console.log(name, age, city)