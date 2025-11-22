// Namespaces (Простори імен)

/* 
Namespaces у TypeScript використовуються для організації коду та запобігання конфліктам імен.
Вони дозволяють групувати пов’язані компоненти разом.
*/

// 1. Приклад використання Namespace для групування функцій
namespace MathUtils {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

const sum = MathUtils.add(5, 3); // sum = 8
const difference = MathUtils.subtract(5, 3); // difference = 2

// 2. Приклад використання Namespace для групування інтерфейсів

/* 
    /// <reference path="models-namespace.ts" />
*/

// namespace Models {
//     export interface User {
//         id: number;
//         name: string;
//     }

//     export interface Product {
//         id: number;
//         name: string;
//         price: number;
//     }
// }
// import { IUser, IProduct } from "./models-namespace";

const _user: Models.IUser = { id: 1, name: "Alice" };
const product: Models.IProduct = { id: 1, name: "Laptop", price: 1200 };

// 3. Приклад використання Namespace для організації класів
namespace Geometry {
    export class Circle {
        constructor(public radius: number) {}

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    export class Square {
        constructor(public side: number) {}

        getArea(): number {
            return this.side * this.side;
        }
    }
}

const circle = new Geometry.Circle(5);
const square = new Geometry.Square(4);

const circleArea = circle.getArea(); // circleArea = 78.53981633974483
const squareArea = square.getArea(); // squareArea = 16
