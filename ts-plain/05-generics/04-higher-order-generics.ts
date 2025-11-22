{
// Higher-Order Generics (Дженерики вищого порядку)

/* 
Higher-Order Generics — це універсальний тип, який приймає інший універсальний тип як аргумент.

Це дає змогу створювати ще гнучкіші та повторно вживані означення типів.
*/

type Mapper<T, U> = (value: T) => U;

/**
 * Функція вищого порядку, що застосовує функцію перетворення до масиву значень.
 *
 * @param array Масив значень для перетворення
 * @param mapper Функція перетворення для застосування до кожного значення
 * @returns Масив перетворених значень
 */
function transformArray<T, U>(array: T[], mapper: Mapper<T, U>): U[] {
    return array.map(mapper);
}

// 1. Mapping чисел до рядків:
const numbers = [1, 2, 3, 4, 5];
const numberToString: Mapper<number, string> = (num) => num.toString();
const stringifiedNumbers = transformArray(numbers, numberToString); 
console.log(stringifiedNumbers); // Result: ["1", "2", "3", "4", "5"]


// ------------------------------------------------------------
// 2. Mapping об’єктів до конкретних властивостей:
interface IProduct {
  id: number;
  name: string;
  price: number;
}

const products: IProduct[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 },
];

const extractProductName: Mapper<IProduct, string> = (product) => product.name;
const productNames = transformArray(products, extractProductName);
console.log(productNames); // Result: ["Laptop", "Mouse", "Keyboard"]

const extractProductId: Mapper<IProduct, number> = (product) => product.id;
const productIds = transformArray(products, extractProductId);
console.log(productIds); // Result: [1, 2, 3]
}
