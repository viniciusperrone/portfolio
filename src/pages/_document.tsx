import type { Metadata } from "next";

import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import Link from 'next/link';

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

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <Link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
          <Script defer src="https://pyscript.net/latest/pyscript.js"></Script>
          <Link key="favicon" rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}