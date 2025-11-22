import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
  theme: ThemeMode;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>("light");

  const toggleTheme = (): void => {
    setTheme((mode) => (mode === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

export type { ThemeMode };

