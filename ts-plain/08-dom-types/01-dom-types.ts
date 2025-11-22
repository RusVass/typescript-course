{
// DOM Types

// 1. Типи для HTML‑елементів

const myElement: HTMLElement | null = document.getElementById('myElement');

// 2. Типи для HTML‑елементів з атрибутами

// const myInput: HTMLInputElement | null = document.getElementById('myInput');
const myInput: HTMLInputElement | null = document.querySelector("#input");

// 3. Типи для HTML‑елементів з атрибутами

const myButton: HTMLButtonElement | null = document.querySelector("button");

// 4. Типи для HTML‑елементів з атрибутами

const mySelect: HTMLSelectElement | null = document.querySelector('select');

// 5. Типи для HTML‑елементів з атрибутами

const myTextarea: HTMLParagraphElement | null = document.querySelector('p');
}