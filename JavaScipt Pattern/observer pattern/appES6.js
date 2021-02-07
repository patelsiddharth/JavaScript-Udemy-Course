class EventObserver{
    constructor()
    {
        this.observers = [];
    }

    subscribe(fn)
    {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`); 
    }

    unsubscribe(fn)
    {
        this.observers = this.observers.filter(function(item)
                        {
                            if(item !== fn)
                            {
                                return item;
                            }
                        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire()
    {
        this.observers.forEach(function(item){
            item.call();
        })
    }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(GetCurrentMilliSeconds);
})

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(GetCurrentMilliSeconds);
})

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(GetCurrentSeconds);
})

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(GetCurrentSeconds);
})

document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
})

const GetCurrentMilliSeconds = function(){
    console.log(`Current milliSecond : ${new Date().getMilliseconds()}`);
}

const GetCurrentSeconds = function(){
    console.log(`Current milliSecond : ${new Date().getSeconds()}`);
}