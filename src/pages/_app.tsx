import type { Metadata } from "next";

import React from 'react';
import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { LanguageProvider } from '@/hooks/useLanguage';
import { ThemeProvider } from '@/hooks/useTheme';

const description = `
  👋 Olá, meu nome é Vinicius. Sou apaixonado por 
  tecnologias e por músicas. Desenvolvo sistemas
  para desktop e mobile, sempre estou aberto a 
  aprender coisas novas. Busco sempre desenvolver
  as melhores soluções, prezando uma boa dinâmica e
  a flexibilidade nas necessidades dos usuários.
`;

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
    },
  ],
  openGraph: {
    type: "website",
    title: "Vinicius Perrone | Full Stack Developer",
    description: description,
    images: "https://firebasestorage.googleapis.com/v0/b/portfolio-18889.appspot.com/o/Preview.png",
  },
};


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default MyApp;