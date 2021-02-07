document.getElementById('name').addEventListener('blur', ValidateName);
document.getElementById('zip').addEventListener('blur', ValidateZip);
document.getElementById('email').addEventListener('blur', ValidateEmail);
document.getElementById('contact').addEventListener('blur', ValidateContact);

function ValidateName()
{
    const name = document.getElementById('name');
    const regEx = /^[A-Za-z]{2,10}$/;

    if(!regEx.test(name.value))
    {
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
    }
    else
    {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
}

function ValidateZip()
{
    const zip = document.getElementById('zip');
    const regEx = /^[0-9]{6}$/;

    if(!regEx.test(zip.value))
    {
        zip.classList.add('is-invalid');
        zip.classList.remove('is-valid');
    }
    else
    {
        zip.classList.remove('is-invalid');
        zip.classList.add('is-valid');
    }
}

function ValidateEmail()
{
    const email = document.getElementById('email');
    const regEx = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!regEx.test(email.value))
    {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    }
    else
    {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}

function ValidateContact()
{
    const contact = document.getElementById('contact');
    const regEx = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!regEx.test(contact.value))
    {
        contact.classList.add('is-invalid');
        contact.classList.remove('is-valid');
    }
    else
    {
        contact.classList.remove('is-invalid');
        contact.classList.add('is-valid');
    }
}