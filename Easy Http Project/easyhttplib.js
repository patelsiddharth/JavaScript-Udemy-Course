function easyHTTP()
{
    this.http = new XMLHttpRequest();
}

//Make Http Get Request
easyHTTP.prototype.get = function(url, callback)
{
    this.http.open('GET',url,true);
    let self = this;
    this.http.onload = function()
    {
        //Inside the function, 'THIS' refer to the this of function and not global this
        if(self.http.status === 200)
        {
            // directly return response wont display it in app.js. Need to use callback method
            callback(null, self.http.responseText);
        }
        else
        {
            callback('Error : ' + self.http.status);
        }
    }
    this.http.send();
}

//Make Http POST Request
easyHTTP.prototype.post = function(url, data, callback)
{
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function()
    {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}


//Make Http PUT Request
easyHTTP.prototype.put = function(url, data, callback)
{
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function()
    {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}


//Make Http DELETE Request
easyHTTP.prototype.delete = function(url, callback)
{
    this.http.open('DELETE',url,true);
    let self = this;
    this.http.onload = function()
    {
        //Inside the function, 'THIS' refer to the this of function and not global this
        if(self.http.status === 200)
        {
            // directly return response wont display it in app.js. Need to use callback method
            callback(null, 'Post Deleted');
        }
        else
        {
            callback('Error : ' + self.http.status);
        }
    }
    this.http.send();
}