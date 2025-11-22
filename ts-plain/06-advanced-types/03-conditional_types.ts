{
// Conditional Types (Умовні типи)

/* 
Conditional Types дозволяють створювати типи, що залежать від умови.
Вони корисні для формування гнучкіших і адаптивніших означень типів.
*/

// 1. Conditional Types для перевірки типу
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;    // type A = true
type B = IsString<number>;     // type B = false

// 2. Conditional Types для фільтрації типів

type FilterStrings<T> = T extends string ? T : never;

type MixedTypes = 'a' | 1 | 'b' | 2 | 'c';
type OnlyStrings = FilterStrings<MixedTypes>; // type OnlyStrings = "a" | "b" | "c"

// 3. Витягнення типу поверненого значення функції

type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getString(): string {
    return "Hello, World!";
}

function getNumber(): number {
    return 69;
}

type StringReturnType = ReturnTypeOf<typeof getString>; // StringReturnType буде string
type NumberReturnType = ReturnTypeOf<typeof getNumber>; // NumberReturnType буде number
}
