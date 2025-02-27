
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості 
// та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
// (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та 
// викличте метод printInfo

import { Book } from "./Book.mjs"; 

class EBook extends Book {
constructor (name, author, year, file_format){
    super(name, author, year);
    this.file_format = file_format;
}
printInfo(){
    console.log(`Book ${this.name} written by ${this.author} published in ${this.year} year in ${this.file_format} format`);
}
}

const EBook1 = new EBook("Death in the Dark", "Agatha Christi", 1983, "pdf");
const EBook2 = new EBook("Death Day", "Horrible Author", 1953, "txt");
const EBook3 = new EBook("Hour of joy (poppy playtime)", "Ur Mom", 2013, "jpg");

EBook1.printInfo();
EBook2.printInfo();
EBook3.printInfo();



