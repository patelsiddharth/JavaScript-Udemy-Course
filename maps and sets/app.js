// maps : key value pair

const maps = new Map();
const key1 = 'Some String',
      key2 = {},
      key3 = function(){
          console.log('Key 3 is a function')
      };

maps.set(key1, 'Value of key1');
maps.set(key2, 'Value of key2');
maps.set(key3, 'Value of key3');

console.log(maps.get(key1));
console.log(maps.get(key2));
console.log(maps.get(key3));

//size of map
console.log(maps.size)

//iterating map
//Loop for of
for(let [key, value] of maps)
{
    console.log(`${key} = ${value}`);
}

//iterate keys
for(let [key] of maps) // for(let key of maps.keys())
{
    console.log(`${key}`);
}

//iterate value
for(let value of maps.values()) // for(let [value] of maps)
{
    console.log(`${value}`);
}


// foreach loop
maps.forEach(function(value, key){
    console.log(`${key} = ${value}`);
})

// Convert to array
const arr = Array.from(maps);
console.log(arr);

// array of keys
const arrkey = Array.from(maps.keys());
console.log(arrkey);

// array of values
const arrval = Array.from(maps.values());
console.log(arrval);

// Sets - Store unique values of any tpe
console.log('-----------------------------------------SETS--------------------------------------')

const set = new Set();
set.add(100);
set.add('String in set');
set.add({name : 'John'});
set.add(true);
set.add(100) // this will not be added since 100 is already present
console.log(set);
console.log('Size : ' + set.size);

const set1 = new Set([1, 'Siddharth', true]);
console.log(set1);

console.log(set1.has(1));
console.log(set1.has(3-2));
set1.delete(1);
console.log(set1);

// for of and foreach -  same as map


const arr2 = Array.from(set);
console.log(arr2);