{
// Generics
// Дженерики (generics) в TypeScript — це спосіб писати універсальний код, 
// який працює з різними типами, але при цьому залишається типобезпечним
interface IBox<T> {
    value: T;
}

const numberBox: IBox<number> = { value: 123 };
const stringBox: IBox<string> = { value: 'TypeScript' };

// =============================
type Pair<T, U> = {
    first: T;
    second: U;
};

const pair: Pair<string, number> = {
    first: 'age',
    second: 30
};
}
