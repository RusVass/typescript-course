// Intersection Types (Типи перетину):
// Тип перетину об’єднує кілька типів в один, і результат
// має всі властивості поєднаних типів.
// Позначається символом амперсанда (&).

interface IName {
    name: string;
  }
  
interface IAge {
  age: number;
}

type Person = IName & IAge;  // Person має містити обидві властивості name і age

const person: Person = {
  name: "Alice",
  age: 30,
};

console.log(person.name, person.age); // Валідно

// const incompletePerson: Person = { name: "Bob" };  // Помилка

// =======================================
// Використання перетину типів з наявними об’єктами:
interface IAddress {
  street: string;
  city: string;
}

const user = {
  id: 1,
  name: "Василь",
};

type UserWithAddress = typeof user & IAddress;

const userWithAddress: UserWithAddress = {
  ...user,
  street: "123 Main St",
  city: "Ямайка",
};

// { id: 1, name: 'Василь', street: '123 Main St', city: 'Ямайка' }
console.log(userWithAddress);

// =======================================
// Literal Types (Літерні типи)
// Літерні типи дозволяють вказати точні значення, які може мати тип.

type Status = "success" | "error" | "pending";
type Result = 0 | 1 | 2;

const _status: Status = "success";
const _result: Result = 0;

console.log(_status, _result);