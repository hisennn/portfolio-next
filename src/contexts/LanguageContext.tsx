"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  isDarkTheme: true,
  toggleTheme: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("pt");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("language");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    const themeValue = newTheme ? "dark" : "light";
    localStorage.setItem("theme", themeValue);
    document.documentElement.setAttribute("data-theme", themeValue);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isDarkTheme, toggleTheme }}>
      {children}
    </LanguageContext.Provider>
  );
} 