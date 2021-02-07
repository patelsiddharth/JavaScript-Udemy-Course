class EasyHTTP
{
    //Make HTTP GET Request
    async get(url)
    {
        const response = await fetch(url);

        const responseData = await response.json();

        return responseData;
    }

    //Make HTTP POST Request
    async post(url, data)
    {
        const response = await fetch(url,{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    }

    //Make HTTP PUT Request
    async put(url, data)
    {
        const response = await fetch(url,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });

        const resData = await response.json();

        return resData;
    }

    //Make HTTP DELETE Request
    async delete(url)
    {
        const response = await fetch(url,{
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            }
        });

        const resData = "Resource Deleted...";

        return resData;
    }
}