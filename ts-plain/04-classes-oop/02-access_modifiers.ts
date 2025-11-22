// 2. Клас із модифікаторами доступу
class BankAccount {
    readonly id: number; // Лише для читання, можна встановити в конструкторі
    public accountNumber: string; // Доступно з будь-якого місця
    private balance: number; // Доступно лише всередині класу
    protected owner: string; // Доступно в класі та його нащадках

    constructor(id: number, accountNumber: string, owner: string) {
        this.id = id;
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.owner = owner;
    }

    // Публічний метод для внесення коштів
    public deposit(amount: number): void {
        this.balance += amount;
    }

    // Публічний метод для зняття коштів
    public withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    // Публічний метод для перевірки балансу
    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(123, "1234567890", "Петро Іванов");
account.deposit(1000);
console.log(account.getBalance()); // 1000
account.withdraw(500);
console.log(account.getBalance()); // 500
// console.log(account.owner); // Помилка: властивість 'owner' доступна лише в класі та його нащадках
// console.log(account.balance); // Помилка: властивість 'balance' є приватною