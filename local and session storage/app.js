// localStorage.setItem('Name','Siddharth');
// localStorage.setItem('Age','24');
// localStorage.setItem('DOB','30-04-1996');
// localStorage.setItem('Place','Jabalpur');

sessionStorage.setItem('New Item','Session storage');

let add = document.querySelector('.btn');
add.addEventListener('click', function(e){
    let newTask = document.querySelector('#task').value;

    let list;
    if(localStorage.getItem('tasks') === null)
    {
        list = [];
    }
    else
    {
        list = JSON.parse(localStorage.getItem('tasks'));
    }

    list.push(newTask);

    localStorage.setItem('tasks',JSON.stringify(list));
    console.log(newTask);
    document.querySelector('#task').value = "";
    e.preventDefault();
})

console.log(add);