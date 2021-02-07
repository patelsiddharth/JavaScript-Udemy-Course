const posts = [
    {title : 'Post 1', body : 'This is post 1'},
    {title : 'Post 2', body : 'This is post 2'}
]

// Using callback
// function createPost (post,callback)
// {
//     setTimeout(function() {
//         posts.push(post);
//         callback();
//     }, 3000);
// }

// function getPosts()
// {
//     setTimeout(function()
//     {
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title} : ${post.body}</li>`;
//         });
//         document.getElementById('content').innerHTML = output;
//     }, 1000);
// }

// createPost({title : 'Post 3', body : 'This is post 3'},getPosts);

// Using promise
function createPost (post)
{   
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);
            let error = false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Something went wrong');
            }
        }, 3000);    
    });
}

function getPosts()
{
    setTimeout(function()
    {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title} : ${post.body}</li>`;
        });
        document.getElementById('content').innerHTML = output;
    }, 1000);
}

createPost({title : 'Post 3', body : 'This is post 3'}).then(getPosts).catch(function(msg){
    console.log(msg);
});