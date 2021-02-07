class Book
{
    constructor(title, author, isbn) 
    {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Store
{
    static FetchData()
    {
        let books;
        if(localStorage.getItem('books') === null)
        {
            books = [];
        }
        else
        {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static DisplayBook()
    {
        let books = Store.FetchData();
        books.forEach(function(book)
        {
            UI.addBookList(book);
        })
    }

    static AddBook(book)
    {
        const books = Store.FetchData();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static RemoveBook(isbn)
    {
        let books = Store.FetchData();
        books.forEach(function(book, index)
        {
            if(book.isbn === isbn)
            {
                books.splice(index, 1);
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }
}

class UI
{
    static addBookList(book)
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
        booklist.appendChild(tRow);
    }

    static DeleteBook(target)
    {
        if(target.className === 'delete')
        {
            if(confirm(`Are you sure you want to delete ${target.parentElement.parentElement.firstElementChild.innerHTML}`))
            {
                console.log('isbn : ' + target.parentElement.previousElementSibling.textContent)
                Store.RemoveBook(target.parentElement.previousElementSibling.textContent);
                target.parentElement.parentElement.remove();
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    static showAlert(message, className)
    {
        const msgDiv = document.querySelector('.alert');
        if(msgDiv)
        {
            msgDiv.remove();
        }
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#form');
        container.insertBefore(div, form);

        setTimeout(function(){
            div.remove();
        }, 3000);
    }    

    static ClearField(title,author,isbn)
    {
        title.value = '';
        author.value = '';
        isbn.value = '';
    }
}
document.addEventListener('DOMContentLoaded',Store.DisplayBook);

//Event listener for add book
document.querySelector("#form").addEventListener('submit', function(e)
{
    const title = document.querySelector("#title"),
          author = document.querySelector("#author"),
          isbn = document.querySelector("#isbn");

    const book = new Book(title.value, author.value, isbn.value);

    if(title.value === '' || author.value === '' || isbn.value === '')
    {
        const errdiv = document.querySelector('.error');
        if(!errdiv)
        {
            UI.showAlert("Please fill in all fields", "error");
        }
    }
    else
    {
        UI.addBookList(book);
        Store.AddBook(book);
        UI.showAlert("Book Added", "success");
        UI.ClearField(title,author,isbn);
    }
    e.preventDefault();
})

//Event listener for delete
document.querySelector('#bookList').addEventListener('click', function(e)
{
    if(UI.DeleteBook(e.target))
    {   
        UI.showAlert("Book deleted", 'success');
    }
    e.preventDefault();
})