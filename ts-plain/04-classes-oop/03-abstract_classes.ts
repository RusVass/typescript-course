// Абстрактні класи в TypeScript

abstract class Shape {
    // Абстрактний метод, який мають реалізувати підкласи
    abstract calculateArea(): number;
  
    // Метод, який можуть використовувати всі фігури
    displayShapeType(shapeType: string): void {
      console.log(`Це ${shapeType}.`);
    }
  }
  
// Інтерфейс із додатковими властивостями для кола
interface ICircleProperties {
    radius: number;
}
  
// Клас, що наслідує абстрактний клас і реалізує інтерфейс
class Circle extends Shape implements ICircleProperties {
    radius: number;

    constructor(radius: number) {
        super(); // Виклик конструктора базового класу
        this.radius = radius;
    }

    // Реалізація абстрактного методу з базового класу
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
  
// Інтерфейс із додатковими властивостями для прямокутника 
interface IRectangleProperties {
    width: number;
    height: number;
}

// Клас Прямокутник, що наслідує абстрактний клас і реалізує інтерфейс
class Rectangle extends Shape implements IRectangleProperties {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // Реалізація абстрактного методу з базового класу
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Приклад використання
const myCircle = new Circle(5);
myCircle.displayShapeType("Коло"); // Це Коло.
console.log(`Площа кола: ${myCircle.calculateArea()}`); // Площа кола: 78.53981633974483

const myRectangle = new Rectangle(4, 6);
myRectangle.displayShapeType("Прямокутник"); // Це Прямокутник.
console.log(`Площа прямокутника: ${myRectangle.calculateArea()}`); // Площа прямокутника: 24
