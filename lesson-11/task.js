
// Завдання 1
// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент 
// та кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий
// текст через вказану кількість мілісекунд

function delayedText(text, seconds) {
    console.log(`${text} appeared in ${seconds} milliseconds!`);
  }
  
  setTimeout(delayedText, 1000, "Hello everyone", 1000);