import { useTheme } from "@/hooks/useTheme";
import { Envelope } from "./Envelope";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import classNames from "classnames";
import { EmailIllustration } from "./EmailIllustration";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const { theme } = useTheme();
  const { selectedLanguage } = useLanguage();
  const fieldClasses = theme === 'light' ? 'border-[1px] border-solid border-[#94A3B8]' : ''

  return(
    <div 
      id="contact"
      className={classNames("w-full flex flex-col md:flex-row gap-10 md:gap-0 py-10 md:pb-20", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light',
      })}
    >
      <div className="w-full flex flex-col px-10 gap-5 md:gap-20">
        <h1 
          className={classNames("text-2xl md:text-4xl font-inter font-semibold md:ml-6", {
            "text-white": theme === 'dark',
            "text-dark-default": theme === 'light'
          })}
        >
          {selectedLanguage === 'en' ? 'Keep In Touch.' : 'Mantenha Contato.'}
        </h1>
        {theme === 'dark' ? <Envelope /> : <EmailIllustration />}
      </div>
      <form className="w-full flex flex-col items-center gap-8">
        <Input 
          placeholder={selectedLanguage === 'en' ? "Name" : "Nome"}
          extraClasses={fieldClasses}
        />
        <Input 
          placeholder="Email"
          extraClasses={fieldClasses}
        />
        <TextArea 
          placeholder={selectedLanguage === 'en' ? "Message" : "Mensagem"}
          extraClasses={fieldClasses}
        />
        <button 
          className="h-12 w-[90%] md:w-96 rounded-[8px] bg-[#0DA2E7] text-white transition-colors hover:opacity-90"
          type="submit" 
        >
        {selectedLanguage === 'en' ? 'SUBMIT' : 'ENVIAR'}
        </button>
      </form>
    </div>
  )
}