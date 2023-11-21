import { createContext, useState } from "react";

const ThemeContext = createContext({});
const UserContext = createContext({});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ theme, setTheme ] = useState("light");
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ user, setUser ] = useState({ authenication: null });
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

export { ThemeContext, UserContext, AppContextProvider };