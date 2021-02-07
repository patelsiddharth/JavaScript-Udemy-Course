try
{
    myFun();
}
catch(e)
{
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
}
finally
{
    console.log("In Finally block. Always executes");
}

console.log('Logging to check if this gets logged after an error');


//Custom Error

const person = {email: 'Abc@gmail.com'};
try
{
    if(!person.name)
    {
        //throw 'Person name is not defined';
        throw new SyntaxError('throwing syntax error');
    }
}
catch(e)
{
    console.log(e);
}