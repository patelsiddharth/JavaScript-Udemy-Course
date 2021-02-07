document.getElementById('button1').addEventListener('click', GetText);

document.getElementById('button2').addEventListener('click', GetJSON);

document.getElementById('button3').addEventListener('click', GetDataFromExternal);

function GetText()
{
    // fetch('text.txt')
    // .then(function(res)
    // {
    //     console.log(res);
    //     return res.text();
    // })
    // .then(function(data)
    // {
    //     console.log(data);
    //     document.getElementById('output').innerHTML = data;
    // })
    // .catch(function(error)
    // {
    //     console.log(error);
    // });

    // using arrow function
    fetch('text.txt')
    .then(res => res.text())
    .then(data =>
    {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(error => console.log(error));
}

function GetJSON()
{
    fetch('posts.json')
    .then(function(res)
    {
        console.log(res);
        return res.json();
    })
    .then(function(posts)
    {
        console.log(posts);
        let data ='';
        posts.forEach(function(post) 
        {
            data += `<li>${post.title}</li>`;
            data += `<li>${post.body}</li>`;
            data += "<br>";
        });
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(error)
    {
        console.log(error);
    });
}

function GetDataFromExternal()
{
    fetch("https://api.github.com/users")
    .then(function(response)
    {
        console.log(response);
        return response.json();
    })
    .then(function(posts)
    {
        console.log(posts);
        let data ='';
        posts.forEach(function(post) 
        {
            data += `<li>${post.login}</li>`;
            data += "<br>";
        });
        document.getElementById('output').innerHTML = data;
    })
}