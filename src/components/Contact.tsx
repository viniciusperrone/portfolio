import { Envelope } from "./Envelope";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export function Contact() {
  return(
    <div 
      id="contact"
      className="w-full flex flex-col md:flex-row gap-10 md:gap-0 py-10 md:mb-20"
    >
      <div className="w-full flex flex-col px-10 gap-5 md:gap-20">
        <h1 className="text-2xl md:text-4xl font-inter font-semibold text-white md:ml-6">Keep In Touch.</h1>
        <Envelope />
      </div>
      <form className="w-full flex flex-col items-center gap-8">
        <Input 
          placeholder="Name"
        />
        <Input 
          placeholder="Email"
        />
        <TextArea 
          placeholder="Message"
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