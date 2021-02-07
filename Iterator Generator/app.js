// Iterators
function nameIterator(names)
{
    let nextIndex = 0;
    return {
        nameItem : function()
        {
            return nextIndex < names.length ? { value : names[nextIndex++], done : false } : { done : true }
        }
    }
}

const namesArr = ["Alpha","Bravo","Charlie"];
const names = nameIterator(namesArr);
console.log(names.nameItem().value);
console.log(names.nameItem().value);
console.log(names.nameItem().value);

console.log(names.nameItem());

//Generators
function* SayNames()
{
    yield 'Alpha';
    yield 'Bravo';
    yield 'Charlie';
}

const generatorsNames = SayNames();
console.log(generatorsNames.next());
console.log(generatorsNames.next());
console.log(generatorsNames.next());
console.log(generatorsNames.next());

// Function to create IDs
function* CreateIDs()
{
    let index = 0;
    while(true)
    {
        yield index++;
    }
}

const id = CreateIDs();

console.log(id.next());
console.log("Id : " + id.next().value);
console.log("Id : " + id.next().value);
console.log("Id : " + id.next().value);
console.log("Id : " + id.next().value);
console.log("Id : " + id.next().value);

