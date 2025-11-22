{
// Декоратори в TypeScript — це спеціальні оголошення, які можна прикріпити
// до класу, методу, властивості чи параметра. Вони дозволяють додати додаткову
// функціональність або змінити поведінку елемента, до якого прикріплені.
// Декоратори потрібні для метапрограмування — можливості модифікувати код під час
// виконання програми, динамічно додаючи або змінюючи поведінку елементів.

// Щоб декоратори працювали, у tsconfig.json потрібно увімкнути "experimentalDecorators": true,
// також можна використати //@ts-ignore, щоб вимкнути перевірку на помилки (лише у крайніх випадках)

// Декоратори класу для логування
function Logging1(constructor: Function) {
    console.log("ClassLogging1", constructor);
}
function Logging2(target: any, propertyKey: string | Symbol): void {
    console.log("ClassLogging2 [target]", target);
    console.log("ClassLogging2 [propertyKey]", propertyKey);
}
function Logging3(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    console.log("ClassLogging3 [target]", target);
    console.log("ClassLogging3 [propertyKey]", propertyKey);
    console.log("ClassLogging3 [descriptor]", descriptor);
}

@Logging1
class MyClass {
    @Logging2
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @Logging3
    getName(): string {
        return this.name;
    }
}

const myClass = new MyClass('Марія');

// --------------------------------------------------------
// декоратор @Component

interface ComponentMetadata {
    selector: string;
    template: string;
}

type Constructor = new (...args: any[]) => any;

function Component(metadata: ComponentMetadata) {
    return function<T extends Constructor>(OriginalConstructor: T) {
      return class extends OriginalConstructor {
        constructor(...args: any[]) {
          super(...args);

          const element = document.querySelector(metadata.selector);

          if (element) {
            const processedTemplate = metadata.template.replace(
              /{{(.*?)}}/g, 
              (_, prop) => this[prop.trim()] || ''
            );

            element.innerHTML = processedTemplate;
          }
        }
      };
    };
}

@Component({
    selector: "#app-root",
    template: "<h2>{{title}}</h2>",
})
class AppComponent {
    title = "Привіт, світе!";

    constructor() {
        console.log("AppComponent створений");
    }
}

const app = new AppComponent();

// --------------------------------------------------------
// Декоратор для перевірки прав доступу
function checkPermission(role: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (role !== 'admin') {
                console.log(`Доступ заборонено для ролі: ${role}`);
                return;
            }
            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

class SecureService {
    @checkPermission('admin')
    performSensitiveOperation(): void {
        console.log('Виконання чутливої операції');
    }
}

const service = new SecureService();
service.performSensitiveOperation();
}
