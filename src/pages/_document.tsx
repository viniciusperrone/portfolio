import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import Link from 'next/link';

const description = `👋 Prazer, sou Vinicius Perrone. Sou apaixonado e estusiasta por tecnologias.`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta property="og:title" content="Vinicius Perrone | Desenvolvedor Full Stack" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/portfolio-18889.appspot.com/o/Preview.png?alt=media&token=301420b3-9c8f-4a66-b54d-619d4dafb52c" />
          <meta property="og:image:width" content="1200" />          
          <meta property="og:image:height" content="675" />
          <meta property="og:site_name" content="Vinicius Perrone Full Stack Developer" />
          <meta property="og:url" content="http://viniciusperrone.dev.br" />
          <meta name="keywords" content="Vinicius Perrone, Vinicius Developer, Desenvolvedor, Programador" />
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