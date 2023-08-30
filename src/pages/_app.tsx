import React from 'react';
import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { LanguageProvider } from '@/hooks/useLanguage';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <LanguageProvider>
    <Component {...pageProps} />
  </LanguageProvider>
  );
}

export default MyApp;