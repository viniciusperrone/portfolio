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
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/portfolio-18889.appspot.com/o/Preview.png?alt=media&token=ea57934c-e13d-4308-9129-727f7ccadbe1" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="820" />
          <meta name="keywords" content="vinicius perrone, vinicius developer, vinicius desenvolvedor" />
          <link rel="icon" href="/favicon.svg" />
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