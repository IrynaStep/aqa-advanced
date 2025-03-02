
// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

export class Book {
constructor (name, author, year){
if (!name || !author || !year){
    throw new Error("All fields are mandatory!");
}


    this._name = name;
    this._author = author;
    this._year = year;
}

get name(){
    return this._name;
}

get author(){
    return this._author;
}

get year(){
    return this._year;
}

set name(value){
    if(!value){
        throw new Error ("The name cannot be empty!");
    }
    this._name = value;
}

set author(value){
    if(!value){
        throw new Error ("The author string cannot be empty!");
    }
    this._author = value;
}

set year(value){
    if(!value){
        throw new Error ("The year cannot be empty!");
    }
    this._year = value;
}


printInfo(){
    console.log(`Book ${this.name} written by ${this.author} published in ${this.year} year`);
}


static findOldestBook(booksArray) {
    let oldest = booksArray[0];

    for (let i = 1; i < booksArray.length; i++) {
        if (booksArray[i].year < oldest.year) {
            oldest = booksArray[i];
        }
    }

    return oldest;
}
}

const Book1 = new Book("Death in the Dark", "Agatha Christie", 1983);

const Book2 = new Book("Death Day", "Horrible Author", 1953);

const Book3 = new Book("Hour of joy (poppy playtime)", "Ur Mom", 2013);

Book1.printInfo();
Book2.printInfo();
Book3.printInfo();

const booksArray = [Book1, Book2, Book3];

const oldestBook = Book.findOldestBook(booksArray);
console.log("Oldest book:");
oldestBook.printInfo();

export { Book1, Book2, Book3 };