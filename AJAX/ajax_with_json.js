const btn1 = document.querySelector('#button1');
btn1.addEventListener('click', LoadCustomer);

function LoadCustomer()
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customer.json',true);

    xhr.onload = function()
    {
        if(this.status === 200)
        {
            console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output =
            `
            <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Comapany : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output;
            console.log(output);
        }
    }

    xhr.send();
}

const btn2 = document.getElementById('button2');
btn2.addEventListener('click', LoadAllCustomers);

function LoadAllCustomers()
{
    const xhr = new XMLHttpRequest()
    xhr.open('GET','customers.json',true);

    xhr.onload = function()
    {
        if(this.status === 200)
        {
            const allCustomers = JSON.parse(this.responseText);
            let output =`<ul>`;
            allCustomers.forEach(function(customer)
            {   
                output += 
                `
                <ul>
                    <li>ID : ${customer.id}</li>
                    <li>Name : ${customer.name}</li>
                    <li>Comapany : ${customer.company}</li>
                    <li>Phone : ${customer.phone}</li>
                </ul>
                <br>
                `;
            });
            output += `</ul>`;
            console.log(output);
            document.getElementById('customers').innerHTML = output;
            console.log(output);
        }
    }

    xhr.send();
}