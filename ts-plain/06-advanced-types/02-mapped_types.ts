{
// Mapped Types (Відображувані типи)

/* 
Mapped Types дозволяють створювати нові типи, змінюючи або трансформуючи наявні.
Вони корисні для побудови гнучкіших і багаторазових означень типів.
*/

// 1. Приклад використання Mapped Types для створення типу з необов’язковими властивостями
interface IPerson {
    name: string;
    age: number;
    address: string;
}

// Створюємо новий тип, у якому всі властивості Person необов’язкові
type PartialPerson = {
    [P in keyof IPerson]?: IPerson[P];
};

const partialPerson1: PartialPerson = { name: "Сергій" }; // Валідно: усі властивості необов’язкові

// Partial — уже готовий тип, що робить усі властивості необов’язковими
const partialPerson2: Partial<IPerson> = { name: "Ігор" };


// 2. Приклад використання Mapped Types для створення типу з властивостями лише для читання
type ReadonlyPerson = {
    readonly [P in keyof IPerson]: IPerson[P];
};

const readonlyPerson: ReadonlyPerson = {
    name: "Alice",
    age: 30,
    address: "123 Main St",
};

// readonlyPerson.age = 31; // Помилка: не можна змінити властивість лише для читання

// 3. Приклад використання Mapped Types для створення типу зі зміненими типами властивостей
type StringifiedPerson = {
    [P in keyof IPerson]: string;
};

const stringifiedPerson: StringifiedPerson = {
    name: "Bob",
    age: "25",
    address: "456 Elm St",
};

// 4. Приклад використання Mapped Types для створення типу з вилученими властивостями
type PersonWithoutAddress = {
    [P in keyof IPerson as Exclude<P, "address">]: IPerson[P];
};

const personWithoutAddress: PersonWithoutAddress = {
    name: "Charlie",
    age: 40,
    // address: "789 Oak St", // Помилка: властивість 'address' не існує в типі 'PersonWithoutAddress'
};
}