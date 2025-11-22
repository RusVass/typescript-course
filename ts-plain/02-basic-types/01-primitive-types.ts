// Примітивні типи в TypeScript
// =====================================

// Number type
const age: number = 30; 
const price: number = 19.99; 

// String type
const firstName: string = "Alice"; 
const helloMessage: string = `Hello, ${firstName}!`;

// Boolean type
const isAvailable: boolean = true;
const hasPermission: boolean = false;

// Null type
const emptyValue: null = null;

// Undefined type
const notDefined: undefined = undefined;

// Приклади помилок типізації
// age = "25";
// firstName = 33;
// emptyValue = undefined // Але помилки немає, якщо `strict` у `tsconfig.json` встановлено в `false`


console.log(`
    Age: ${age}, 
    Price: ${price}, 
    Name: ${firstName}, 
    Message: ${helloMessage},
    Available: ${isAvailable}, 
    Permission: ${hasPermission}, 
    Empty: ${emptyValue}, 
    Not Defined: ${notDefined}`
);
