// document.addEventListener('DOMContentLoaded',function(e)
// {
//     const clear = document.querySelector('#clear');
//     clear.disabled = true;
//     e.preventDefault();
// })
document.querySelector('.get-jokes').addEventListener('click', GetJokes);

function GetJokes(e)
{
    const numberOfJokes = document.querySelector('#number');
    if(numberOfJokes.value > 0)
    {
        const xhr = new XMLHttpRequest();
        xhr.open('GET',`http://api.icndb.com/jokes/random/${numberOfJokes.value}`,true);
        xhr.onload = function()
        {
            if(this.status === 200)
            {
                const response = JSON.parse(xhr.responseText);
                const div = document.querySelector('.jokes');
                if(response.type === "success")
                {
                    console.log(response.value);
                    response.value.forEach(function(jokes)
                    {
                        div.innerHTML += `<li>${jokes.joke}</li>`;
                    });
                }
                else
                {
                    div.innerHTML += 'Something went wrong !!!'; 
                }
            }
        }
        numberOfJokes.value = '';
        xhr.send();
    }
    e.preventDefault();
}

document.querySelector('#clear').addEventListener('click', function(e)
{
    document.querySelector('.jokes').innerHTML = "";
    e.preventDefault();
});