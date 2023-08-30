import { 
  useState, 
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

  const onChangeToPortuguese = () => setSelectedLanguage('pt');

  const onChangeToEnglish = () => setSelectedLanguage('en');

  const onChangeLanguage = () => {
    if(selectedLanguage === 'pt') {
      setSelectedLanguage('en');

      return;
    }

    setSelectedLanguage('pt');
  }

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
