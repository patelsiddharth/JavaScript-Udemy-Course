const http = new easyHTTP();

//GET 
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response)
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(response);
//     }
// });

// Post
 const data = {
     title : 'Custom Post',
     body : 'This is a custom post'
 };

 //  http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, response)
//  {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(response);
//     }
//  });


 // Put
 http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response)
  {
     if(err)
     {
         console.log(err);
     }
     else
     {
         console.log(response);
     }
  });

  //Delete
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(response);
    }
});