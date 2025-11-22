// Типізація функцій у TypeScript
// ======================================

// 1. Базова типізація функції
function greet(name: string): string {
    return `Привіт, ${name}!`;
}

// 2. Функція без значення, що повертається
function logMessage(message: string): void {
    console.log(message);
}

// 3. Функція з кількома параметрами
function calculateSum(a: number, b: number): number {
    return a + b;
}

// 4. Функція з параметрами за замовчуванням
function createGreeting(name: string, greeting: string = "Привіт"): string {
    return `${greeting}, ${name}!`;
}

// 5. Функція з рештковими параметрами
function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 6. Стрілкові функції з типізацією
const multiply = (a: number, b: number): number => a * b;


// Приклади використання
console.log(greet("Іван")); // Привіт, Іван!
logMessage("Повідомлення в консоль");
console.log(calculateSum(5, 3)); // 8
console.log(createGreeting("Марія")); // Привіт, Марія!
console.log(createGreeting("Олексій", "Вітаю")); // Вітаю, Олексій!
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(multiply(4, 5)); // 20
