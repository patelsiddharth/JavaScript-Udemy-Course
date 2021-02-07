//event delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e)
{
    // if(e.target.parentElement.className === 'delete-item secondary-content')
    // {
    //     console.log(e.target);
    // }.
    console.log(e.target.parentElement.classList);
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        e.target.parentElement.parentElement.remove();
        console.log(e.target);
    }
}