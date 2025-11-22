// Успадкування в TypeScript
// ================================================

// Базовий клас
class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // Метод буде перевизначено в підкласах
    makeSound(): void {
      console.log("Generic animal sound");
    }
  }
  
// Підклас, що наслідує базовий клас
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
      super(name); // Виклик конструктора базового класу
      this.breed = breed;
    }
  
    // Перевизначає метод makeSound базового класу
    makeSound(): void {
      console.log("Гав! Гав!");
    }
}
  
// Ще один підклас, що наслідує базовий клас
class Cat extends Animal {
    color: string;

    constructor(name: string, color: string) {
      super(name);
      this.color = color;
    }

    // Перевизначає метод makeSound базового класу
    makeSound(): void {
      console.log("Няв!");
    }
}

// Створюємо екземпляри різних класів
const myDog = new Dog("Чапко", "Лабрадор");
const myCat = new Cat("Серафима", "Персидська");

myDog.makeSound(); // "Гав! Гав!"
myCat.makeSound(); // "Няв!"
