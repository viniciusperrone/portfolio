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
}

type ProviderProps = {
  children: ReactNode;
};

const LanguageContext = createContext({} as LanguageContextData);

function LanguageProvider({ children }: ProviderProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'pt' | 'en'>('pt');

  const onChangeToPortuguese = () => setSelectedLanguage('pt');

  const onChangeToEnglish = () => setSelectedLanguage('en');

  return(
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        onChangeToPortuguese,
        onChangeToEnglish
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
