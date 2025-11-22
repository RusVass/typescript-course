{
// Utility Types (Утилітарні типи) 
/* 
Utility Types у TypeScript надають корисні інструменти для роботи з типами.
Вони дозволяють змінювати й комбінувати наявні типи, створюючи нові.
*/

// 1. Partial<Type>
// Створює новий тип, у якому всі властивості Type є необов’язковими.
interface IUser {
    id: number;
    name: string;
    age: number;
}

const partialUser: Partial<IUser> = {}; // Валідно: усі властивості необов’язкові
const partialUser2: Partial<IUser> = { name: "Вася" };

// 2. Readonly<Type>
// Створює новий тип, у якому всі властивості Type лише для читання.
const user: Readonly<IUser> = {
    id: 1,
    name: "Alice",
    age: 25,
};

// user.id = 2; // Помилка: не можна змінити властивість лише для читання

// 3. Record<Keys, Type>
// Створює об’єктний тип із набором властивостей Keys, що мають тип Type.
type Role = "admin" | "user" | "guest";

const rolePermissions: Record<Role, string[]> = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"],
};

console.log(rolePermissions.admin); // Output: ["read", "write", "delete"]

// 4. Pick<Type, Keys>
// Створює новий тип, обираючи набір властивостей Keys із Type.
type UserPreview = Pick<IUser, "id" | "name">;
// interface IUserPreview extends Pick<IUser, "id" | "name"> {}

const preview: UserPreview = {
    id: 1,
    name: "Alice",
    // age: 25, // Помилка: властивість 'age' не існує в типі 'UserPreview'
};

// 5. Omit<Type, Keys>
// Створює новий тип, виключаючи набір властивостей Keys із Type.
type UserWithoutAge = Omit<IUser, "age">;

const userWithoutAge: UserWithoutAge = {
    id: 1,
    name: "Bob",
    // age: 30, // Помилка: властивість 'age' не існує в типі 'UserWithoutAge'
};
}
