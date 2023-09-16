import { 
  useState, 
  useEffect,
  useContext, 
  createContext, 
  Dispatch, 
  SetStateAction, 
  ReactNode
} from "react";

interface ThemeContextData {
  theme: 'dark' | 'light';
  setTheme: Dispatch<SetStateAction< 'dark' | 'light'>>;
  onChangeHandle: () => void;
}

type ProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext({} as ThemeContextData);

function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const onChangeHandle = () => {
    const themeStored = localStorage.getItem('theme');

    if(themeStored) {
      localStorage.removeItem('theme');
    }

    if(theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');

      return;
    }

    localStorage.setItem('language', 'dark');
    setTheme('dark');
  }

  useEffect(() => {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const storeData = localStorage.getItem('dark');

    if(!storeData && darkThemeQuery.matches) {
      if (darkThemeQuery.matches) {
        setTheme('dark')
        return;
      }

      setTheme('light');
      return;
    }

    if(storeData) {
      setTheme(storeData as typeof theme);
    }
  }, []);

  console.log("theme", theme);

  return(
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        onChangeHandle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error(
      "useTheme must be used within an ThemeProvider"
    );

  return context;
}

export {
  ThemeProvider,
  useTheme
}
