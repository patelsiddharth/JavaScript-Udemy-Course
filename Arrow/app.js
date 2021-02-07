function SayHello(name)
{
    console.log(`Hello ${name} !!!`);
}

SayHello('Siddharth');

// Arrow function

// 1
const arrow1 = () => {
    console.log("Arrow function 1")
}
arrow1();

// 2 : Single parameter does not need parenthesis
const arrow2 = name => console.log(`${name} line function`)
arrow2('one');

// Using multiple parameter
const arrow3 = (firstName, lastName) => `Hello ${firstName} ${lastName}`;
console.log(arrow3('Siddharth','Patel'));

// Returning from arrow function
const arrow4 = () => "Returning this string from arrow function";
console.log(arrow3());

// Return object
const arrow5 = () => ({title : 'Siddharth'});
console.log(arrow4());

//Using Callbacks
const user = ['Nathan','Josh','Brad'];
const nameLength = user.map(function(name){
    return `${name} : ${name.length}`;
})
console.log(nameLength);
const lengthUsingArrow = user.map(name => `${name} : ${name.length}`);
console.log(lengthUsingArrow);