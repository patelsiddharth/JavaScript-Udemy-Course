let addTask = document.querySelector('.btn')
addTask.addEventListener('click', onclick);
function onclick(e)
{
    let newTask = document.querySelector('#task');
    if(newTask.value.toString() != "")
    {
        console.log(newTask.value);
        let parentUl = document.querySelector('ul.collection');
        const listItem = document.createElement('li');
        listItem.className = 'collection-item';
        listItem.textContent = newTask.value;

        const link = document.createElement('a');
        link.setAttribute('href','#');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';

        listItem.appendChild(link);
        parentUl.appendChild(listItem);
    }
    newTask.value = "";
    e.preventDefault();
}

let task = document.getElementById('task');
let heading = document.querySelector('h5');
task.addEventListener('keyup', function(e)
{
    heading.innerText = e.target.value;
})

//console.log(task);