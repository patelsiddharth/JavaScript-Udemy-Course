class EasyHTTP
{
    //Make HTTP GET Request
    get(url)
    {
        return new Promise((resolve, reject) => 
        {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    //Make HTTP POST Request
    post(url, data)
    {
        return new Promise((resolve, reject) => 
        {
            fetch(url,{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    //Make HTTP PUT Request
    put(url, data)
    {
        return new Promise((resolve, reject) => 
        {
            fetch(url,{
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    //Make HTTP DELETE Request
    delete(url)
    {
        return new Promise((resolve, reject) => 
        {
            fetch(url,{
                method : 'DELETE',
                headers : {
                    'Content-type' : 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => resolve('Resource deleted'))
            .catch(error => reject(error));
        });
    }
}