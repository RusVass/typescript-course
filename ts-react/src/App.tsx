import { useState, type ReactElement } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./Button";

// Описуємо логотипи, які показуємо у шапці
const logos = [
  { href: "https://vite.dev", src: viteLogo, alt: "Vite logo", className: "logo" },
  { href: "https://react.dev", src: reactLogo, alt: "React logo", className: "logo react" },
] as const;

export default function App(): ReactElement {
  // Локальний лічильник натискань
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount((value) => value + 1);

  return (
    <>
      {/* Шапка з логотипами */}
      <div>
        {logos.map((logo) => (
          <a key={logo.href} href={logo.href} target="_blank" rel="noreferrer">
            <img src={logo.src} className={logo.className} alt={logo.alt} />
          </a>
        ))}
      </div>

      <h1>Vite + React</h1>

      {/* Картка з кнопкою-лічильником */}
      <div className="card">
        <Button onClick={increment}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}