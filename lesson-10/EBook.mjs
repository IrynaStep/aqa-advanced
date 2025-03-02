
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості 
// та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
// (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та 
// викличте метод printInfo

import { Book1, Book2, Book3 } from "./Book.mjs"; 

export class EBook extends Book {
constructor (name, author, year, file_format){
    super(name, author, year);
    this.file_format = file_format;
}
set file_format(value){
    if(!value){
        console.log("The format cannot be empty!");
        return;
    }
    this.file_format = value;
}


printInfo(){
    console.log(`EBook ${this.name} written by ${this.author} published in ${this.year} year in ${this.file_format} format`);
}

static fromBook(bookInstance, file_format) {
    const newEBook = new EBook(bookInstance.name, bookInstance.author, bookInstance.year, file_format);
    return newEBook;
}

}

const EBook1 = new EBook("Death in the Dark", "Agatha Christi", 1983, "pdf");
const EBook2 = new EBook("Death Day", "Horrible Author", 1953, "txt");
const EBook3 = new EBook("Hour of joy (poppy playtime)", "Ur Mom", 2013, "jpg");
const EBook4 = new EBook("Old School", "Ancient Writer", 1800, "txt");

const allBooks = [Book1, Book2, Book3, EBook1, EBook2, EBook3, EBook4];

const oldestBook = Book.findOldestBook(allBooks);
console.log("Oldest book:");
oldestBook.printInfo();


EBook1.printInfo();
EBook2.printInfo();
EBook3.printInfo();
EBook4.printInfo();



