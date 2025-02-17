// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі, якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, 
// коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть 
// повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.



function divide (numerator, denominator){
        if (denominator === 0){
        throw new Error ("Division by zero is not allowed");

        } else if (isNaN(numerator) || isNaN(denominator)){
        throw new Error("Both arguments must be numbers");

        } else return numerator / denominator;
    }
    
// console.log(divide(30, "q"));

// console.log(divide(30, 7));

// console.log(divide(30, 0));

try {
    console.log(divide(30, 0)); // "Division by zero is not allowed"
  } catch (e) {
    console.log(e);
  } finally {
    console.log('default output');
  }


try {
    console.log(divide(30, 7));
  } catch (e) {
    console.log(e); // All fine!
  } finally {
    console.log('default output');
  }  


try {
    console.log(divide(30, "q"));
  } catch (e) {
    console.log(e); // "Both arguments must be numbers"
  } finally {
    console.log('default output');
  }  


