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

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta property="og:title" content="Vinicius Perrone | Desenvolvedor Full Stack" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/portfolio-18889.appspot.com/o/Preview.svg?alt=media&token=e44f9be4-d70e-46e3-8d33-a4dff48b655d" />
          <link rel="icon" href="/favicon.svg" />
          <meta name="keywords" content="vinicius perrone, vinicius developer, vinicius desenvolvedor" />
          <Link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
          <Script defer src="https://pyscript.net/latest/pyscript.js"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}