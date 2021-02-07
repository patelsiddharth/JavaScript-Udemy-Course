console.log(document.getElementById('task-title'));
console.log('Id of task-title : ' + document.getElementById('task-title').getAttribute('id'));
console.log('Id of task-title : ' + document.getElementById('task-title').id);

//change styling
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = "#FF1"
taskTitle.textContent = "Siddharth";
taskTitle.innerHTML = "<h2>InnerHTML</h2>";
taskTitle.innerText = "<h2>InnerHTML</h2>";

// document.queryselector - single element selector : only return 1 element

console.log("Query Selector " + document.querySelector('#task-title'))

document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'pink';

// getelementbyclassname
const items = document.getElementsByClassName('collection-item');
console.log(items);
items[2].style.color = 'yellow';

// getelementbytagname
let tags = document.getElementsByTagName('li');
console.log(tags);
tags[2].style.color = 'yellow';

//Convert HTML collection into Array
tags = Array.from(tags);
console.log("Array of LI : " + tags);

tags.forEach(function(tag){
    tag.textContent = 'red';
    console.log(tag);
})

//document.QuerySelectorAll : this returns list on which array method can be called like foreach etc.
const items1 = document.querySelectorAll('ul.collection li.collection-item');
items1.forEach(function(item, index){
    item.textContent = `${index} : Hello`;
    console.log(item);
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(li)
{
    li.style.color = 'pink';
    li.style.background = 'black';
})

const liEven = document.querySelectorAll('li:nth-child(even)');
liEven.forEach(function(li)
{
    li.style.color = 'black';
    li.style.background = 'pink';
})

console.log('Length of odd LI : ' + liOdd.length);
console.log('Length of even LI : ' + liEven.length);