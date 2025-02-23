// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі


const users = [
    { name: "Andrii", email: "andrii@gmai.com", age: 30 },
    { name: "Yulia", email: "yulia@gmai.com", age: 55 },
    { name: "Alona", email: "alona@gmai.com", age: 18 }
  ];

  for (const person of users) {
    console.log(`${person.name} is ${person.age} years, text him/her by email ${person.email}`);
  }
