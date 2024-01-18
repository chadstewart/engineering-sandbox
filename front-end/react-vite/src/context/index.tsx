import { createContext, useState } from "react";

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export { ThemeContext, AppContextProvider };
