const symbol = Symbol();
console.log(symbol);

// No 2 symbol are ever equal
const sym1 = Symbol('123');
const sym2 = Symbol('123');
console.log(sym1 === sym2);

// Can be used as a unique obejct key
const key1 = Symbol('Key1');
const key2 = Symbol('Key2');

const myObj = [];
myObj[key1] = 'Prop1';
myObj[key2] = 'Prop2';

console.log(myObj[key1]);
console.log(myObj[key2]);

myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// Symbol are not enumerable
for(i in myObj)
{
    console.log(`${i} : ${myObj[i]}`);
}

// Symbols are ignored by stringify
console.log(JSON.stringify({key : 'Prop'}));
console.log(JSON.stringify({[Symbol('SYMBOL')] : 'SymbolProp'}));
