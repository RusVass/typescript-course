// Приклад дженерика з обмеженням
function logValue<T extends { value: string }>(obj: T): void {
    console.log(obj.value);
}
  
logValue({ value: "Hello" }); // Працює коректно
// logValue({ val: "Hi" }); // Помилка: відсутня властивість 'value'

// ------------------------------------------------------------
// Приклад універсального класу з типом за замовчуванням
class DataHolder<T = string> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

// Приклад використання
const stringHolder = new DataHolder("Some string");
console.log(stringHolder.getData()); // Output: Some string

const numberHolder = new DataHolder(123);
console.log(numberHolder.getData()); // Output: 123

// const defaultHolder = new DataHolder();
