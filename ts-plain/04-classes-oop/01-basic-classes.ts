// Основи класів у TypeScript
// ==================================

// Базове оголошення класу
class User {
    // Властивості класу
    name: string;
    age: number;

    // Конструктор
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Методи класу
    greet(): void {
        console.log(`Привіт, мене звати ${this.name} і мені ${this.age}!`);
    }

    // Методи класу
    isAdult(): boolean {
        return this.age >= 18;
    }
}

const userInstance = new User("Іван", 30);
console.log(userInstance.greet()); // "Привіт, мене звати Іван і мені 30!"
console.log(userInstance.isAdult()); // true
