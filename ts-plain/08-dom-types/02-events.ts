{
// Events

// 1. Типи для подій

const myButton: HTMLButtonElement | null = document.querySelector("button");

myButton!.addEventListener("click", (e: MouseEvent) => {
    console.log("Button clicked");
});

myButton!.addEventListener("keyup", (e: KeyboardEvent) => {
    console.log("Button pressed");
});

myButton!.addEventListener("touchstart", (e: TouchEvent) => {
    console.log("Button touched");
});

myButton!.addEventListener("dragstart", (e: DragEvent) => {
    console.log("Button dragged");
});
}
