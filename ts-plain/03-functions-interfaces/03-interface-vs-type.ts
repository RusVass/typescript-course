 // Інтерфейси та типи в TypeScript
// =================================

// Інтерфейси та типи визначають структуру об’єкта й можуть містити властивості, методи та індекси.

// Інтерфейс для опису структури об’єкта користувача
interface IUserInterface {
    name: string;
    age: number;
    email: string;
    // greet(): string;
    greet: () => string;
}

// Реалізація інтерфейсу
const user1: IUserInterface = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user1.greet()); // Hello, my name is Alice

// Тип для опису структури об’єкта користувача
type UserType = {
    name: string;
    age: number;
    email: string;
    greet: () => string;
};

// Реалізація типу
const user2: UserType = {
    name: "Nik",
    age: 25,
    email: "nik@example.com",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(user2.greet()); // Hello, my name is Nik

// ====================================================
// Відмінності між інтерфейсами та типами:
// 1. Інтерфейси можуть розширювати одне одного або класи, тоді як типи можна об’єднувати оператором &.
// 2. Інтерфейси краще підходять для опису структури об’єктів, а типи універсальніші й можуть описувати об’єднання, перетини та примітиви.
// 3. Інтерфейси можна повторно відкривати й додавати нові властивості, а типи — ні.
// ====================================================
interface IExtendedUserInterface extends IUserInterface {
    role: string;
}
// interface ExtendedUserInterface {
//     role: string;
//     role2: string;
// }

const user3: IExtendedUserInterface = {
    name: "Alex",
    age: 28,
    email: "alex@example.com",
    role: "admin",
    // role2: "barmen",
    greet() {
        return `Hello, my name is ${this.name} and I am an ${this.role}`;
    }
};

console.log(user3.greet()); // Hello, my name is Alex and I am an admin
