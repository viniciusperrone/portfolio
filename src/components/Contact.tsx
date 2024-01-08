import { useTheme } from "@/hooks/useTheme";
import { Envelope } from "./Envelope";
import { TextArea } from "./TextArea";
import classNames from "classnames";
import { EmailIllustration } from "./EmailIllustration";
import { useLanguage } from "@/hooks/useLanguage";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { cn } from "@/utils/cn";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome deve conter pelo menos 3 caracteres.",
  }),
  email: z
    .string({
      required_error: "E-mail é obrigatório.",
    })
    .email({
      message: "Formato de e-mail está inválido.",
    }),
  message: z.string().min(1, {
    message: "Escreva uma mensagem.",
  }),
});

const Form = FormProvider;

export function Contact() {
  const { theme } = useTheme();
  const { selectedLanguage } = useLanguage();

  const fieldClasses = theme === 'light' ? 'border-[1px] border-solid border-[#94A3B8]' : '';
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

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
      <Form {...form}>
        <form 
          className="w-full flex flex-col items-center gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className={fieldClasses}
                    placeholder={selectedLanguage === 'en' ? "Name" : "Nome"}
                    {...field}
                  />
                </FormControl>
                <FormMessage 
                  className={
                    cn({
                      "text-white": theme === 'dark',
                      "text-purple-900": theme === 'light'
                    })
                  }
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className={fieldClasses}
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage 
                  className={
                    cn({
                      "text-white": theme === 'dark',
                      "text-purple-900": theme === 'light'
                    })
                  }
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className={fieldClasses}
                    placeholder={selectedLanguage === 'en' ? "Message" : "Mensagem"}
                    {...field}
                  />
                </FormControl>
                <FormMessage 
                  className={
                    cn({
                      "text-white": theme === 'dark',
                      "text-purple-900": theme === 'light'
                    })
                  }
                />
              </FormItem>
            )}
          />

          <button 
            className="h-12 w-[90%] md:w-96 rounded-[8px] bg-[#0DA2E7] text-white transition-colors hover:opacity-90"
            type="submit" 
          >
          {selectedLanguage === 'en' ? 'SUBMIT' : 'ENVIAR'}
          </button>
        </form>
      </Form>
    </div>
  )
}