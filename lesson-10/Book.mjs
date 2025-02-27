
// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

export class Book {
constructor (name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
}
printInfo(){
    console.log(`Book ${this.name} written by ${this.author} published in ${this.year} year`);
}
}

const Book1 = new Book("Death in the Dark", "Agatha Christi", 1983);

const Book2 = new Book("Death Day", "Horrible Author", 1953);

const Book3 = new Book("Hour of joy (poppy playtime)", "Ur Mom", 2013);

Book1.printInfo();
Book2.printInfo();
Book3.printInfo();
