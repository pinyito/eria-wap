let books = [];//in-memory storage for the books
let counter = 0; //generates ids for books

module.exports = class Book{
    constructor(id, title, author){
        this.bookId = id; //the name used with this key word must match the name in the request parameter
        this.title = title;
        this.author = author;
    }
    static getById(bookId){
        return books.find(b => b.bookId == bookId);
    }

    save(){
        this.bookId = counter;
        books.push(this);
        counter++;
        return this;
    }

    static getByAuthor(name){
        return books.filter(b => b.author.firstname.toLowerCase().includes(name.toLowerCase()));
    }
}