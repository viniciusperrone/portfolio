import { useState } from "react";

import toast, { Toaster } from 'react-hot-toast';
import classNames from "classnames";
import { useTheme } from "@/hooks/useTheme";
import { Envelope } from "./Envelope";
import { z } from "zod";
import { EmailIllustration } from "./EmailIllustration";
import { useLanguage } from "@/hooks/useLanguage";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { cn } from "@/utils/cn";

const Form = FormProvider;

const messageInput = {
  name: {
    pt: 'O nome deve conter pelo menos 3 caracteres.',
    en: 'The name must contain at least 3 characters.'
  },
  email: {
    pt: 'Email é obrigatório.',
    en: 'Email is mandatory.'
  },
  formatEmail: {
    pt: 'Formato de email está inválido.',
    en: 'Email format is invalid.'
  },
  message: {
    pt: 'Escreva uma mensagem.',
    en: 'Write a message.'
  }
};

export function Contact() {
  const [loading, setLoading] = useState<boolean>(false);
  const { theme } = useTheme();
  const { selectedLanguage } = useLanguage();

  const fieldClasses = theme === 'light' ? 'border-[1px] border-solid border-[#94A3B8]' : '';
  
  const formSchema = z.object({
    name: z.string().min(3, {
      message: messageInput.name[selectedLanguage],
    }),
    email: z
      .string({
        required_error: messageInput.email[selectedLanguage],
      })
      .email({
        message: messageInput.formatEmail[selectedLanguage],
      }),
    message: z.string().min(1, {
      message: messageInput.message[selectedLanguage],
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      let feedbackMessage: string = "Sent with success!";

      await fetch('api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (selectedLanguage === "pt") {
        feedbackMessage = "Enviado com sucesso!";
      }

      toast.success(feedbackMessage, {
        position: "bottom-center"
      });
    } catch (error) {
      let feedbackMessage: string = "Unable to send!";

      if (selectedLanguage === "pt") {
        feedbackMessage = "Não foi possível enviar!";
      }
      
      toast.error(feedbackMessage, {
        position: "bottom-center"
      });

    } finally {
      setLoading(false);

      form.reset();
    }
  }

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
            className={classNames("h-12 w-[90%] md:w-96 rounded-[8px] bg-[#0DA2E7] text-white transition-colors hover:opacity-90", {
              "opacity-80": loading
            })}
            disabled={loading}
            type="submit" 
          >
            {selectedLanguage === 'en' && !loading && 'SUBMIT'}
            {selectedLanguage === 'pt' && !loading && 'ENVIAR'}
            {loading && (
              selectedLanguage === 'en' ? 'SENDING' : 'ENVIANDO'
            )}
          </button>
        </form>
      </Form>
      <Toaster />
    </div>
  )
}