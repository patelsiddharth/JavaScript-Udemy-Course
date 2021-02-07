document.querySelector('#button').addEventListener('click',loadData);

function loadData()
{
    //Create XHR object
    const xhr = new XMLHttpRequest();

    //OPEN : 3 Arguments
    // Specify type of request 
    // file and
    // for async, set true as 3rd parameter
    xhr.open('GET','data.txt',true);

    // When data is loading
    xhr.onprogress = function()
    {
        console.log(this.readyState);
    }


    xhr.onload = function()
    {
        if(this.status === 200)
        {
            console.log(this.responseText);
            var output = document.querySelector('#output');
            output.innerHTML = this.responseText;
        }
    };

    xhr.onerror = function()
    {
        console.log('Error occured');
    }

    // xhr.onreadystatechange = function()
    // {
    //     console.log(this.readyState);
    //     if(this.status === 200 && this.readyState === 4)
    //     {
    //         console.log(this.responseText);
    //     }
    // }
    
    //ReadyState value
    // 0 == Request not initialized
    // 1 == server connection established
    // 2 == request received
    // 3 == processing request
    // 4 == request finished and response is ready

    xhr.send();
}