import { useTheme } from "@/hooks/useTheme";
import { Envelope } from "./Envelope";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import classNames from "classnames";
import { EmailIllustration } from "./EmailIllustration";

export function Contact() {
  const { theme } = useTheme();
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
          Keep In Touch.
        </h1>
        {theme === 'dark' ? <Envelope /> : <EmailIllustration />}
      </div>
      <form className="w-full flex flex-col items-center gap-8">
        <Input 
          placeholder="Name"
          extraClasses={fieldClasses}
        />
        <Input 
          placeholder="Email"
          extraClasses={fieldClasses}
        />
        <TextArea 
          placeholder="Message"
          extraClasses={fieldClasses}
        />
        <button 
          className="h-12 w-[90%] md:w-96 rounded-[8px] bg-[#0DA2E7] text-white transition-colors hover:opacity-90"
          type="submit" 
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}