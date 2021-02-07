const posts = [
    {title : 'Post One', body : 'This is post one'},
    {title : 'Post Two', body : 'This is post two'}
];

// function CreatePost(post)
// {
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function GetPosts()
// {
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// CreatePost({title : 'Post Three', body : 'This is post three'});
// GetPosts();



function CreatePost(post, callback)
{
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function GetPosts()
{
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

CreatePost({title : 'Post Three', body : 'This is post three'}, GetPosts);