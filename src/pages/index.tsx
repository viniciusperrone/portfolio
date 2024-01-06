import React, { Fragment, useState, useEffect } from "react";
import { Header } from "../components/Header";
import { LoadingPage } from "../components/Loading";
import { Main } from "../components/Main";
import { Skills } from "../components/Skills";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { FavButton } from "@/components/FavButton";
import { Drawer } from "@/components/Drawer";
import { useLanguage } from "@/hooks/useLanguage";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [drawer, setDrawer] = useState<boolean>(false);
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    if (!document) return;

    if(selectedLanguage === 'pt') {
      document.title = 'Vinicius Perrone | Desenvolvedor Full Stack';

      return;
    }

    document.title = 'Vinicius Perrone | Full Stack Developer';

  }, [selectedLanguage]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
    
  return(
    <Fragment>
      { loading && <LoadingPage /> }
      {
        !loading && (
          <>
            <Drawer open={drawer} onClose={() => setDrawer(false)}/>
            <Header onOpen={() => setDrawer(true)}/>
            <Main />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <FavButton />
          </>
        )
      }
    </Fragment>
  )
}