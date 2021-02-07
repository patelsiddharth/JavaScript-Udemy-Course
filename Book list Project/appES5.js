function Book(title, author, isbn)
{
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI()
{
    
}

UI.prototype.addBookList = function(book)
{
    const booklist = document.querySelector('#bookList');
    const tRow = document.createElement('tr');

    tRow.innerHTML = 
    `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td style='position:relative'><a href="#" class="delete">x</a></td>
    `;

    //fast and easier way is to use template literal
    // const title = document.createElement('td');
    // title.textContent = book.title;

    // const author = document.createElement('td');
    // author.textContent = book.author;

    // const isbn = document.createElement('td');
    // isbn.textContent = book.isbn;

    // tRow.appendChild(title);
    // tRow.appendChild(author);
    // tRow.appendChild(isbn);

    booklist.appendChild(tRow);
}

UI.prototype.ClearField = function(title,author,isbn)
{
    title.value = '';
    author.value = '';
    isbn.value = '';
}

UI.prototype.showAlert = function(message, className)
{
    document.querySelector('.alert').remove();
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#form');
    container.insertBefore(div, form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.DeleteBook = function(target)
{
    if(target.className === 'delete')
    {
        if(confirm(`Are you sure you want to delete ${target.parentElement}`))
        {
            console.log(target.parentElement.parentElement.firstElementChild.value);
            target.parentElement.parentElement.remove();
        }
    }
}

//Event listener for add book
document.querySelector("#form").addEventListener('submit', function(e)
{
    const title = document.querySelector("#title"),
          author = document.querySelector("#author"),
          isbn = document.querySelector("#isbn");

    const ui = new UI();
    const book = new Book(title.value, author.value, isbn.value);
    if(title.value === '' || author.value === '' || isbn.value === '')
    {
        const errdiv = document.querySelector('.error');
        if(!errdiv)
        {
            ui.showAlert("Please fill in all fields", "error");
        }
    }
    else
    {
        ui.addBookList(book);
        ui.showAlert("Book Added", "success");
        ui.ClearField(title,author,isbn);
    }
    e.preventDefault();
})

//Event listener for delete
document.querySelector('#bookList').addEventListener('click', function(e)
{
    const ui = new UI();
    ui.DeleteBook(e.target);
    ui.showAlert("Book deleted", 'success');
    e.preventDefault();
})