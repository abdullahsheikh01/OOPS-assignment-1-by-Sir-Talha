//                                                      Tasks 
// 1. Basic Class and Object
// Problem: Define a class named `Book`. Create an instance of this class.✅
// 2. Class Properties
// Problem: Add properties `title` and `author` to the `Book` class. and create an instance of it with title 
// and author properties.✅
// 3. Class Constructor
// Problem: Add a constructor to the `Book` class to initialize `title` and `author` when a new instance
//  is created.✅
// 4. Creating Multiple Instances
// Problem: Create another instance of the `Book` class with a different title and author.✅
// 5. Class Methods
// Problem: Add a method to the `Book` class that prints the title and author of the book.✅
// 6. Calling Instance Methods
// Problem: Call the method you added in the previous step on both instances of the `Book` class to display their
//  titles and authors.✅
// 7. Class Inheritance
// Problem: Create a subclass `EBook` that inherits from the `Book` class and has an additional property `fileSize`.✅
// 8. Overriding Methods
// Problem: Override the method in the `Book` class within the `EBook` subclass to include the `fileSize` in the 
// output. Basically rewrite the displayDetails() method to display filesize.✅
// 9. Class variables
// Problem: Add a class variable to `Book` class to keep track of the created instances and create a method to 
// display them.✅

// Task 1

// class Book {
// }
// let book1 : Book = new Book();

// Task 2
// class Book{
//     name : string =  "TypeScript Deep Dive";
//     author : string = "Basarat Ali Syed"
// }
// let book1 : Book = new Book();

// Task 3,4,5,6,7,8 and 9
class Book{
    name : string ;
    author : string ;
    static numberOfBooks : number = 0;
    static allBooks : Book[] = [];
    bookNumber : number;
    constructor(name : string, author : string){
        this.name = name;
        this.author = author;
        this.bookNumber = ++Book.numberOfBooks;
        Book.allBooks.push(this);
    }
    displayDetails():void{
        console.log(`Book Name: ${this.name} and Author Name: ${this.author}`);
    }
    static displayBookNumber(){
        console.log(Book.numberOfBooks);
        
    }
    static displayAllBookNames(){
        console.log(Book.allBooks);
    }
}
let book1 : Book = new Book("Effective TypeScript: 62 Specific Ways to Improve Your TypeScript","Dan Vanderkam");
console.log(Book.numberOfBooks);
let book2 : Book = new Book("Programming TypeScript: Making Your JavaScript Applications Scale","Boris Cherny");
book1.displayDetails();

book2.displayDetails();
console.log(book2.bookNumber);


class Ebook extends Book{
    filesize : string;
    constructor(name : string , author : string , filesize: string){
        super(name,author);
        this.filesize = filesize;
    }
    displayDetails():void{
        console.log(`Book Name: ${this.name}, Author: ${this.author} and filesize: ${this.filesize}`);
    }
}
let eBook1 : Ebook = new Ebook("Learning TypeScript 2.x","Remo H. Jansen","Approximately 18 MB");
let eBook2 : Ebook = new Ebook("TypeScript Essentials","Christopher Nance","Approximately 7 MB");
eBook1.displayDetails();
eBook2.displayDetails();
Book.displayBookNumber();
Book.displayAllBookNames();
// Note: I add an array and method to print it for print all instances of class `Book`.