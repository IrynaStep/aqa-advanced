// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

const square = (width, height) => {
    return width * height;
};

console.log("Площа прямокутника -", square(5, 10));



function square1 (width, height){
    return width * height;

}
console.log("Площа прямокутника -", square1(6, 18));



const square2 = function (width, height){
        return width * height;

}
console.log("Площа прямокутника -", square2(3, 4));
