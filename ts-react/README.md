# TS Examples Playground

Міні-проєкт показує практичні шаблони React + TypeScript, які демонструють:

- типізовані пропси, optional/default пропси та children
- типи для подій форми, `useState`, `useReducer`
- generics у функціях, компонентах та кастомному хуку `useFetch<T>`
- type narrowing, discriminated unions, utility types (Partial, Pick, Omit, Required, Readonly)
- типізований API-запит/відповідь, контекст `ThemeContext`, форми, статус бейджі

## Структура

```
src/
  components/   # Короткі демонстраційні компоненти
  context/      # ThemeContext з суворою типізацією
  hooks/        # useFetch<T>
  types/        # Спільні інтерфейси API та користувачів
  utils/        # Узагальнені хелпери
```

## Що змінилося

- `App.tsx` тепер рендерить секції Playground: UserCard, FormExample, ListWithGenerics, ReducerCounter, UnionStatusBadge, UtilityTypesDemo та FetchExample.
- Додані нові типи (`src/types`), generic-хук `useFetch<T>` та ThemeContext з клієнтським `ThemeToggle`.
- Для кожної теми створені окремі компоненти у `src/components`, які демонструють typed props, події, generics, utility types, useReducer та discriminated unions.
- Оновлені глобальні стилі (`src/index.css`, `src/App.css`) для презентації прикладів у вигляді секцій.

## Деталі реалізації React-проєкту

- **Головний макет (`App.tsx`)** — серверний компонент, що збирає всі приклади у секції `FeatureSection`, передає типізовані дані й демонструє композицію маленьких блоків.
- **UserCard** — показує typed props, optional/default значення, рендер children та умовні поля профілю.
- **FormExample** — типізована форма з `useState`, `ChangeEvent`, `FormEvent`, обовʼязковими/кастомними полями та `output` для останнього сабміту.
- **ListWithGenerics + generic helpers** — приклад компонентів/функцій з дженериками (`buildDictionary`, `withTimestamp`) і read-only масивами.
- **ReducerCounter** — `useReducer` з discriminated union дій та повним exhaustiveness checking.
- **UnionStatusBadge** — демонструє type narrowing, `assertNever` і безпечний рендер статусів.
- **UtilityTypesDemo** — практичне застосування `Partial`, `Pick`, `Omit`, `Required`, `Readonly` на одному `UserProfile`.
- **FetchExample + useFetch<T>** — generic-хук для API-запитів з typed `ApiRequest<T>` та кастомним парсером відповіді.
- **ThemeProvider / ThemeToggle** — контекст із строго типізованим значенням, клієнтський перемикач теми та повторне використання у всіх секціях.
- **Стилі** — Tailwind-подібна утилітарна розмітка у CSS для секцій, грідів, бейджів та форм, орієнтована на читабельність прикладів.

## Схеми

### Ієрархія компонентів

```
App (RSC)
├─ ThemeProvider
│  └─ ThemeToggle (client)
├─ FeatureSection × 7
│  ├─ UserCard
│  ├─ FormExample (client)
│  ├─ ListWithGenerics
│  ├─ ReducerCounter (client)
│  ├─ UnionStatusBadge
│  ├─ UtilityTypesDemo
│  └─ FetchExample (client + useFetch<T>)
└─ Shared utils/types/context/hooks
```

### Потік даних / станів

```
User data (static objects) ──► UserCard / ListWithGenerics / UtilityTypesDemo
Form events (Change/Form) ──► useState<FormValues> ──► FormExample UI
Reducer actions ──► useReducer(counterReducer) ──► ReducerCounter buttons
Status discriminated union ──► UnionStatusBadge ──► badge rendering
API request (ApiRequest<T>) ──► useFetch<T> ──► FetchExample output
Theme toggle click ──► ThemeContext.toggleTheme ──► ThemeToggle label + CSS modifiers
```

## Запуск

```bash
cd /Users/ruslan/Desktop/typescript-course/ts-react
npm install
npm run dev
```

Відкрий `http://localhost:5173` та досліди кожний розділ playgroundʼу.
