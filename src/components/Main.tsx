import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import Typical from 'react-typical';

import { Code } from "./Code";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";

const descriptionInPortuguese = `
  👋 Olá, meu nome é Vinicius. Sou apaixonado por 
  tecnologias e por músicas. Desenvolvo sistemas
  para desktop e mobile, sempre estou aberto a 
  aprender coisas novas. Busco sempre desenvolver
  as melhores soluções, prezando uma boa dinâmica e
  a flexibilidade nas necessidades dos usuários.
`;

const descriptionInEnglish = `
  👋 Hello, my name is Vinicius. I'm in love with
  technologies and music. I develop systems
  for desktop and mobile, I'm always open to
  learn new things. I always seek to develop
  the best solutions, valuing good dynamics 
  and flexibility in the needs of users.
`;

const developerPortuguese = ['um Desenvolvedor Mobile', 'um Desenvolvedor Web', 'um Desenvolvedor FullStack'];
const developerEnglish = ['a Mobile Developer.', 'a Web Developer.', 'a FullStack Developer.'];

function TitleHighlighted({ extraClasses }: any) {
  const { selectedLanguage } = useLanguage();
  const { theme } = useTheme();
  
  const [typicalKey, setTypicalKey] = useState(0); // Chave para reiniciar o Typical

  useEffect(() => {
    // Sempre que a linguagem for alterada, atualize a chave para reiniciar o Typical
    setTypicalKey((prevKey) => prevKey + 1);
  }, [selectedLanguage]);

  const steps = useMemo(() => {
    let kindDeveloper;

    if(selectedLanguage === 'en') {
      kindDeveloper = [`, ${developerEnglish[0]}`, 1000, `, ${developerEnglish[1]}`, 1000, `, ${developerEnglish[2]}`, 1000]
    } else {
      kindDeveloper = [`, ${developerPortuguese[0]}`, 1000, `, ${developerPortuguese[1]}`, 1000, `, ${developerPortuguese[2]}`, 1000]
    }

    return kindDeveloper;
  }, [selectedLanguage]);

  return (
    <h1 
      className={classNames(`text-3xl md:text-5xl font-inter font-extrabold w-full md:max-w-[500px] ${extraClasses}`, {
        "text-[#C6C6C6]": theme === 'dark',
        "text-[#242442]": theme === 'light'
      })}
    >
      <span className="bg-gradient-to-r from-gradientBlue1 to-gradientBlue2 via-gradientBlue3 text-transparent bg-clip-text">
        Vinicius Perrone
      </span>
      <Typical
        key={typicalKey} // Chave para recriar o Typical quando a linguagem muda
        steps={steps}
        loop={Infinity}
        wrapper="span"
      />
    </h1>
  )
}

export function Main() {
  const { selectedLanguage } = useLanguage();
  const { theme } = useTheme();

  let description;

  if(selectedLanguage === 'en') description = descriptionInEnglish;
  else description = descriptionInPortuguese;

  return(
    <main 
      id="about" 
      className={classNames("w-full min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light'
      })}
    >
      <div className="w-full min-h-full flex flex-col md:justify-center md:pl-16 gap-10 md:gap-20 pt-10 md:pt-32 pb-10">
        <TitleHighlighted extraClasses="h-24 hidden md:block" />
        <p 
          className={classNames("font-open text-lg max-w-[90%] m-auto md:m-0 md:max-w-[60%] text-justify", {
            "text-gray-400": theme === 'dark',
            "text-[#64748B]": theme === 'light'
          })}
        >
          {description}
        </p>
        <Code />
      </div>
      <div className="w-full min-h-full py-5 px-5 md:px-0 md:py-0">
        <TitleHighlighted extraClasses="h-[72px] block md:hidden mb-6" />
        <Image 
          src="/images/bg_main_section.png"
          height={600}
          width={600}
          alt="Main Section"
        />
      </div>
    </main>
  )
}