function foo()
{
    console.log('Hello');
}

foo();

// Adding async in front of function will make it return promise
async function foo1()
{
    return ('Async : Hello');
}
foo1().then(res => console.log(res));

async function myFunc()
{
    const promise = new Promise((resolve, reject) => 
    {
        setTimeout(() => resolve('Hello'), 1000);
    });

    const err = false;
    if(!err)
    {
        const res = await promise;
    }
    else
    {
        await new Promise.reject(new Error('Something went wrong'));
    }
    return promise;
}

myFunc()
.then(resp => console.log(resp))
.catch(err => console.log(err));

async function GetUsers()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();

    return data;
}

GetUsers()
.then(users => console.log(users));