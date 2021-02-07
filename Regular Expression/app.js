let re;
re = /Siddharth/;
re = /Siddharth/i; // Case insensitive
re = /Siddharth/g; // Global search
let ne = /hello/i;

console.log(re);
console.log(re.source);

let result1 = re.exec('Hello Siddharth');
console.log(result1);
console.log(result1[0]);
console.log("Input String : " + result1.input);
console.log("Index : " + result1.index);

// test() return true if match found else false
const res = re.test('Sidd');
console.log(res);

// match() return result array or null
let str = 'Hello there';
const res1 = str.match(re);
console.log(res1);

//search() result index of 1st match if found else null
let str1 = 'Hello there';
const res2 = str.search(ne);
console.log(res2);

//replace()
let str2 = 'Hello there';
const res3 = str2.replace(ne, 'hi');
console.log(res3);

let regEx;

regEx = /hello/;
regEx = /hello/i;

regEx = /^h/i;              // Caret Symbol denotes : 'Must start with'
regEx = /d$/i;              // Dollar Symbol denotes : 'Must Ends with'
regEx = /world$/i;          // Ends with "World"
regEx = /^hello$/i;         // Must begin and ends with
regEx = /^h.llo$/i;         //We can add any character in place of .
regEx = /Hello*World/i;     // We can place any number of characters between hello and world
regEx = /gre?a?y/i;         // Character before ? is optional
regEx = /grey\?/i;          // Escape character. Use \

// Bracket [] - Charater Set
regEx = /gr[ea]y/i;         // Must be an 'a' or 'e'
regEx = /[^gf]ray/i;         // Will match anything except G or F
regEx = /^[gf]ray/i;         // starting character must be G or F
regEx = /[A-Z]ray/;         // matches all uppercase letter
regEx = /[a-z]ray/;         // matches all lowercase letter
regEx = /[A-Za-z]ray/;      // matches all starting letter
regEx = /[0-9]ray/;         // matches all digit in starting

// Braces {} - Quantifiers
regEx = /Hel{2}o/i;         // l must occur 2 times
regEx = /Hel{2,5}o/i;       // l must occur 2 to 5 times
regEx = /Hel{2,}o/i;        // l must occur atleast 2 times

//Parenthesis () - Grouping
regEx = /^([0-9]x){3}$/;

// Shorthand character classes
regEx = /\w/;               // Word Character - alphanumeric or _
regEx = /\w+/;              // + means one or more word character 
regEx = /\W/;               // Non Word Character - anything but alphanumeric or _
regEx = /\d/;               // Match any digit
regEx = /\d+/;              // Match any digit 0 orr more time
regEx = /\D/;               // Non digit Character - anything but digit
regEx = /\s/;               // Match whitespace
regEx = /\S/;               // Match non whitespace

regEx = /Hell\b /i;            // Word boundary

regEx = /x(?=y)/;           // Match only if x is followed by a y
regEx = /x(?!y)/;           // Match only if x is not followed by a y

str = 'xzy';

const result = regEx.exec(str);
console.log(result);

function retest(regEx, str)
{
    if(regEx.test(str))
    {
        console.log(`${str} matches ${regEx.source}`);
    }
    else
    {
        console.log(`${str} does NOT match ${regEx.source}`);
    }
}

retest(regEx,str);
