// Перевантаження функцій у TypeScript
// ======================================

/* 
Перевантаження функцій — це спосіб оголосити кілька функцій з одним ім’ям, але різними параметрами та значеннями, що повертаються.

Це потрібно, коли ми хочемо мати кілька функцій з однаковою назвою, проте з різними параметрами та результатами.
Це безпечний спосіб реалізувати поліморфізм у TypeScript.
*/

// 1. Базове перевантаження функцій
function getMessage(message: string): string;
function getMessage(message: number): number;
function getMessage(message: string | number): string | number {
    if (typeof message === "string") {
        return `Рядкове повідомлення: ${message}`;
    } else {
        return message;
    }
}

console.log(getMessage("Привіт"));
console.log(getMessage(42));

// 2. Перевантаження з різною кількістю параметрів
function processString(str: string): string;
function processString(str: string, repeat: number): string;
function processString(str: string, repeat?: number): string {
    if (repeat === undefined) {
        return str;
    } else {
        return str.repeat(repeat);
    }
}

console.log(processString("Hello"));
console.log(processString("Hello", 3));

// 3. Перевантаження методів класу
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        return `${a}${b}`;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.add("Hello, ", "World")); // "Hello, World"
