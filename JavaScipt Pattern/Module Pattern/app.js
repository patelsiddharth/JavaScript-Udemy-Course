//Module Pattern Structure
// eefi : immediately invoke function expression
// (function()
// {
//     // Declare private var and functions
//     return{
//         //Declare public variables and functions
//     }
// })();

//Standard module pattern
const useCtrl = (function()
{
    // Private
    const text = 'Hello World';
    const changeText = () => {
        const element = document.querySelector('h1');
        element.textContent = text;
    }
    return{
        //Public
        callChangeText : function()
        {
            changeText();
            console.log('Text changed...' + text);
        }
    }
})();



document.getElementById('change').addEventListener('click', e => 
{
    useCtrl.callChangeText();
});

//Revealing module pattern

const revealingPattern= (function()
{
    //Private
    let data = [];
    
    function add(item)
    {
        data.push(item);
        console.log('Item Added...');
    }
    
    function get(id)
    {
        return data.find(item => {
            return item.id === id;
        });
    }

    return{
        //Public
        add : add,
        get : get
    }
})();
revealingPattern.add({id : 1, name : 'Siddharth'});
revealingPattern.add({id : 2, name : 'John'});
revealingPattern.add({id : 3, name : 'Mark'});
console.log(revealingPattern.get(1));
console.log(revealingPattern.get(2));
console.log(revealingPattern.get(3));