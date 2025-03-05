
// Завдання 2
// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних
// Завдання 3
// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити


async function FetchToDo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  }
console.log(FetchToDo);

async function FetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
  }
console.log(FetchToDo);


Promise.all([FetchToDo(), FetchUser()])
.then (results => {const [todo, user] = results;
console.log("Promise.all results:", {todo, user});
});

Promise.race([FetchToDo(), FetchUser()])
.then (result => {console.log("Promise.race result:", result);
});