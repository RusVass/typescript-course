// Type Assertions in TypeScript

/* 
    Ствердження типів — це спосіб повідомити компілятору TypeScript, що значення має певний тип,
    навіть якщо виведення типу не може визначити його автоматично. Це схоже на наведення типу в інших мовах.
*/

// Є два способи виконання стверджень типів:

// 1. Angle-bracket syntax (рідше застосовується, може конфліктувати з JSX/TSX):
const someValue: any = "This is a string";
const stringLength: number = (<string>someValue).length;

console.log(`stringLength: ${strLength}`);

// 2. `as` синтаксис (переважний варіант, сумісний із JSX/TSX):
const someValue1: any = "This is a string";
const stringLength1: number = (someValue as string).length;
console.log(`stringLength1: ${stringLength1}`);

// --------------------------------------------------------
// ! non-null assertion operator (оператор ствердження відсутності null чи undefined)
const myElement: HTMLElement | null = document.getElementById('myElement');

// Без `!` компілятор видасть помилку, адже myElement може дорівнювати null.
myElement!.style.color = 'red';
// myElement && (myElement.style.color = 'red');

/* 
Коли потрібні ствердження типів?
- Коли ви знаєте про типи більше, ніж TypeScript.
- Під час взаємодії з бібліотеками, які можуть не мати повної підтримки TypeScript або точних визначень типів.

примітка:
    Ствердження типу — це спосіб повідомити компілятору, що слід обробляти значення як конкретний тип.
    Якщо ви стверджуєте неправильний тип, це може призвести до помилок під час виконання. 
    Використовуйте ствердження типу обережно й лише тоді, коли впевнені в типі.
*/
