import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "theme-blue" | "theme-green" | "theme-orange" | "theme-red";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme;
    return saved && ["theme-blue", "theme-green", "theme-orange", "theme-red"].includes(saved)
      ? saved
      : "theme-blue"; // theme-blue is default
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    // Remove existing themes
    root.classList.remove("theme-blue", "theme-green", "theme-orange", "theme-red");
    // Add new theme
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
