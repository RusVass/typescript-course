// Масиви й кортежі в TypeScript
// =======================================

// Arrays
const numbersArr: number[] = [1, 2, 3, 4, 5];
const namesArr: string[] = ["Alice", "Bob", "Charlie"];
const mixedArray: (number | string)[] = [1, "hello", 2, "world"];

// Tuples
// Кортежі — це масиви з фіксованою кількістю елементів і відомими типами для кожної позиції.
const personArr: [string, number] = ["Alice", 30];
// personArr[0] = 30; // Error: Type 'number' is not assignable to type 'string'
// personArr[2] = "extra"; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'

// Приклад: координати
const coordinates: [number, number] = [10, 20];
const point3D: [number, number, number] = [1, 2, 3];

console.log(numbersArr);
console.log(namesArr);
console.log(mixedArray);
console.log(personArr);
console.log(coordinates);
console.log(point3D);
