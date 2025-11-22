import { useTheme } from "../context/theme-context.tsx";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme} className="theme-toggle">
      Theme: {theme === "light" ? "Light" : "Dark"} — click to switch
    </button>
  );
}

