// Generic Functions (Універсальні функції)

/* 
Дженерик дозволяє написати функцію, що може працювати з різними типами 
без потреби створювати окремі функції для кожного типу.

Параметри типу задаються за допомогою кутових дужок <T> після імені функції.
*/

// Переваги універсальних типів:

// 1. Code Reusability:  Можливість повторного використання коду.
// 2. Type Safety:  Дженерики забезпечують перевірку типів під час компіляції, запобігаючи помилкам на виконанні.
// 3. Flexibility:  Робота з різними типами даних.
// 4. Readability:  Дженерики часто чистіші й простіші для розуміння порівняно з використанням `any`.

// Універсальна функція, що повертає перший елемент масиву
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// const getFirstElement = <T>(arr: T[]): T => {
//     return arr[0];
// }

// Використання універсальної функції з різними типами
const numbersArray: number[] = [1, 2, 3];
const firstNumber = getFirstElement(numbersArray); // firstNumber має тип "число" (inferred)
console.log(firstNumber); // Output: 1

const strings: string[] = ["hello", "world"];
const firstString = getFirstElement(strings); // firstString має тип "рядок" (inferred)
console.log(firstString); // Output: "hello"

// ------------------------------------------------------------
// Універсальні класи дають змогу створювати екземпляри, що можуть працювати з різними типами.
// Параметри типу задаються за допомогою кутових дужок <T> після імені класу.

// Універсальний клас, який зберігає значення певного типу
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // Output: 10

const stringBox = new Box<string>("Typescript");
console.log(stringBox.getValue()); // Output: "Typescript"

// ------------------------------------------------------------
