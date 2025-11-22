// Union Types:
// Тип об’єднання дає змогу змінній мати один із кількох типів
// Позначається вертикальною рискою (|), що розділяє можливі типи.

let result: number | string;

result = 10; // Валідно: result може бути числом
result = "Success"; // Валідно: result може бути рядком
// result = true;  // Помилка: result не може бути булевим значенням

function printResult(value: number | string) {
    console.log(`Result: ${value}`);
}

printResult(15); // Валідно
printResult("Error"); // Валідно
// printResult(false); // Помилка
