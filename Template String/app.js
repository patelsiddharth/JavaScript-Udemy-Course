let html;
let name = 'Siddharth';
let age = 24;
let job = "Developer";
let city = 'Jabalpur';

function hello()
{
    return 'hello';
}

//Template string ES6
html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
        <li>Function : ${hello()}</li>
        <li>Expression Evaluation : ${2+2}</li>
        <li>Condition Evaluation : ${age > 30 ? 'Under 30' : 'Over 30'}</li>
    </ul>
`;

document.body.innerHTML = html;

let array1 = [34,56,221,45,12,4,23];
let array2 = new Array(1,34,21,45,677,11,9);

function under50(num)
{
    return num < 50;
}


console.log(array1.find(under50));