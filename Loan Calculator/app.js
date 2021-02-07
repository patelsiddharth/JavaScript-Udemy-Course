document.querySelector('#loan-form').addEventListener('submit', function(e)
{
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';
    setTimeout(CalculateResult,1000);
    e.preventDefault();
});

function CalculateResult()
{
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');

    const monthpay = document.querySelector('#monthly-payment');
    const totalpay = document.querySelector('#total-payment');
    const totalinterest = document.querySelector('#total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calucatedPayment = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calucatedPayment);
    const monthly = (principle * x * calculatedInterest)/(x-1);

    if(isFinite(monthly))
    {
        monthpay.value = monthly.toFixed(2);
        totalpay.value = (monthly * calucatedPayment).toFixed(2);
        totalinterest.value = ((monthly * calucatedPayment) - principle).toFixed(2);
        
        document.querySelector('#loading').style.display = 'none';
        document.querySelector('#results').style.display = 'block';
    }
    else
    {
        document.querySelector('#loading').style.display = 'none';
        const err = document.querySelector('.errorDiv');
        if(!err)
        {
            //alert("Enter all value");
            ShowError("Error Occured. Please add number in all fields.");
        }
        else
        {
            console.log(err);
        }
    }
}

function ShowError(error)
{
    const errDiv = document.createElement('div');
    errDiv.className = 'alert alert-danger errorDiv';
    const redblock = document.createElement('div');
    redblock.className ='redblock';
    const span = document.createElement('span');
    span.textContent = error;
    
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content close';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    link.addEventListener('click', function(e)
    {
        errDiv.remove();
        console.log(e.target.parentElement.parentElement);
    })

    errDiv.appendChild(redblock);
    errDiv.appendChild(span);
    errDiv.appendChild(link);
    const heading = document.querySelector('.heading');
    const card = document.querySelector('.card');



    card.insertBefore(errDiv, heading);

    //clear err after 2 sec
    setTimeout(function(){
        errDiv.remove();
    },2000);

    console.log(errDiv);
}

