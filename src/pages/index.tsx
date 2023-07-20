import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { LoadingPage } from "../components/Loading";
import { Main } from "../components/Main";
import { Skills } from "../components/Skills";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  
  return(
    <>
      <Head>
        <title>Vinicius Perrone | Full Stack Developer</title>
      </Head>
      { loading && <LoadingPage /> }
      {
        !loading && (
          <>
            <Header />
            <Main />
            <Skills />
          </>
        )
      }
    </>
  )
}