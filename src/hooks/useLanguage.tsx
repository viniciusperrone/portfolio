import { 
  useState, 
  useEffect,
  useContext, 
  createContext, 
  Dispatch, 
  SetStateAction, 
  ReactNode
} from "react";

interface LanguageContextData {
  selectedLanguage: 'pt' | 'en';
  setSelectedLanguage: Dispatch<SetStateAction< 'pt' | 'en'>>;
  onChangeToPortuguese: () => void;
  onChangeToEnglish: () => void;
  onChangeLanguage: () => void;
}

type ProviderProps = {
  children: ReactNode;
};

const LanguageContext = createContext({} as LanguageContextData);

function LanguageProvider({ children }: ProviderProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'pt' | 'en'>('pt');

  const onChangeToPortuguese = () => {
    const languageStored = localStorage.getItem('language');

    if(languageStored) {
      localStorage.removeItem('language');
    }

    setSelectedLanguage('pt');
    localStorage.setItem('language', 'pt');
  };

  const onChangeToEnglish = () => {
    const languageStored = localStorage.getItem('language');

    if(languageStored) {
      localStorage.removeItem('language');
    }

    setSelectedLanguage('en')
    localStorage.setItem('language', 'en');
  };

  const onChangeLanguage = () => {
    const languageStored = localStorage.getItem('language');

    if(languageStored) {
      localStorage.removeItem('language');
    }

    if(selectedLanguage === 'pt') {
      setSelectedLanguage('en');
      localStorage.setItem('language', 'en');

      return;
    }

    localStorage.setItem('language', 'pt');
    setSelectedLanguage('pt');
  }

  useEffect(() => {
    const storeData = localStorage.getItem('language');

    if(storeData) {
      setSelectedLanguage(storeData as typeof selectedLanguage);
    }
  }, []);

  console.log('language', selectedLanguage);

  return(
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        onChangeToPortuguese,
        onChangeToEnglish,
        onChangeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguage(): LanguageContextData {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error(
      "useLanguage must be used within an LanguageProvider"
    );

  return context;
}

export {
  LanguageProvider,
  useLanguage
}
