export {} // завдяки цьому запису TypeScript бачить цей файл як модуль

declare global {
    interface Window {
        myCustomProperty: string;
    }
}