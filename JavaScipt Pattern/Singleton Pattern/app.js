const singleton = (function(){
    let instance;
    function CreateInstance()
    {
        const obj = new Object({id : 100, name : 'Siddharth'});
        return obj;
    }

    return{
        getInstance : function(){
            if(!instance)
            {
                instance = CreateInstance();
            }
            return instance;
        }
    }
})();

const instanceA = singleton.getInstance();
console.log(instanceA);

const instanceB = singleton.getInstance();
console.log(instanceB);

// Both instace will be same
console.log(instanceA === instanceB);