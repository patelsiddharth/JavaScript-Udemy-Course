const form = document.querySelector('#task-form');
const addTask = document.querySelector('.btn');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners()
{
    document.addEventListener('DOMContentLoaded', LoadAllTask);
    addTask.addEventListener('click', AddTaskFunction); 
    taskList.addEventListener('click', DeleteTask);
    clearBtn.addEventListener('click', ClearTaskList);
    filter.addEventListener('keyup', FilterTask);
}

function LoadAllTask()
{
    let list = JSON.parse(localStorage.getItem('tasks'));
    list.forEach(
        function(task)
        {
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.textContent = task;

            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"></i>';

            li.appendChild(link);
            taskList.appendChild(li);
        }
    )
}

function AddTaskFunction(e)
{
    if(taskInput.value === '')
    {
        alert("Add task");
    }
    else
    {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.textContent = taskInput.value;

        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';

        li.appendChild(link);
        taskList.appendChild(li);

        StoreToLocalStorage(taskInput.value);

        taskInput.value = '';
    }
    //console.log(taskInput.value);
    e.preventDefault();
}

function StoreToLocalStorage(task)
{
    let list;
    if(localStorage.getItem('tasks') === null)
    {
        list = [];
    }
    else
    {
        list = JSON.parse(localStorage.getItem('tasks'));
    }
    
    list.push(task);
    localStorage.setItem('tasks',JSON.stringify(list));
}

function DeleteTask(e)
{
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        taskList.removeChild(e.target.parentElement.parentElement);

        const removeElement = e.target.parentElement.parentElement.textContent;
        let tasks;
        if(localStorage.getItem('tasks') === null)
        {
            tasks = [];
        }
        else
        {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(
            function(task, index)
            {
                if(task == removeElement)
                {
                    tasks.splice(index, 1);
                }
            }
        )
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(tasks);
    }
    //console.log(e.target);
    e.preventDefault();
}

function ClearTaskList(e)
{
    console.log(e.target);
    if(confirm('Are you sure ?'))
    {
        //taskList.remove();
        //taskList.innerHTML = '';
        while(taskList.firstChild)
        {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }
    e.preventDefault();
}

function FilterTask(e)
{
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach
    (
        function(task)
        {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1)
            {
                task.style.display = 'block';
            }
            else
            {
                task.style.display = 'none';
            }
        }
    )
    e.preventDefault();
}