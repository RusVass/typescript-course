// Приклад 3: Переліки (Enums) в TypeScript
// =========================================

// 1. Числові переліки (Enums)
// За замовчуванням enum нумерує свої властивості з 0.
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

const move: Direction = Direction.Up;
console.log(move);

// 2. Рядкові переліки (Enums)
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

const favoriteColor: Color = Color.Blue;
console.log(favoriteColor); 

// 3. Переліки з користувацькими значеннями
enum ResponseCode {
    OK = 200,
    NotFound = 404,
    ServerError = 500
}

const responseCode: ResponseCode = ResponseCode.NotFound;
console.log(responseCode);

// 4. Гетерогенні переліки (змішані типи)
enum MixedEnum {
    No = 0,
    Yes = "YES"
}


console.log(Direction[0]); // Виведе: "Up"
console.log(Direction[Direction.Up]); // Виведе: "Up"

// Приклади помилок
// let wrongDirection: Direction = 5;
// let wrongColor: Color = "YELLOW"; // Помилка: "YELLOW" не є допустимим значенням Color 