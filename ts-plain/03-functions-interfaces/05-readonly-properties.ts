// Readonly властивості в TypeScript
// =====================================

// 1. Readonly властивості в інтерфейсах
interface UserReadonly {
    readonly id: number;
    name: string;
    readonly birthDate: Date;
}

const user5: UserReadonly = {
    id: 1,
    name: "Анна",
    birthDate: new Date("1990-01-01")
};
// user5.id = 2; // Помилка: Cannot assign to 'id' because it is a read-only property
// user5.name = "Анна Іванова"; // Можна змінити


// 2. Readonly масиви
const numbers: readonly number[] = [1, 2, 3, 4, 5];
// const numbers: Readonly<number[]> = [1, 2, 3, 4, 5];
// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers.push(6); // Помилка: Property 'push' does not exist on type 'readonly number[]'
// numbers[0] = 10; // Помилка: Index signature in type 'readonly number[]' only permits reading

// 3. Readonly кортежі
const point: readonly [number, number] = [10, 20];

// 4. Readonly властивості в класах
class Article {
    readonly id: number;
    title: string;
    
    constructor(id: number, title: string) {
        this.id = id; // Можна встановити лише в конструкторі
        this.title = title;
    }
    
    changeId(newId: number) { 
       // this.id = newId; // Помилка: Cannot assign to 'id' because it is a read-only property
    }
}

// Рекомендації:
// 1. Використовуйте readonly для захисту від випадкових змін
// 2. Застосовуйте readonly до критично важливих властивостей (id, зовнішні ключі)
// 3. Використовуйте Readonly<T> для створення незмінних об’єктів
// 4. Пам’ятайте, що readonly захищає лише від прямих присвоєнь 