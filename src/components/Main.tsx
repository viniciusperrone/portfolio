import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import Typical from 'react-typical';
import { useMediaQuery } from "react-responsive";


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

function TitleHighlighted({ extraClasses, downBreakPoint }: any) {
  const [typicalKey, setTypicalKey] = useState(0); 
  const { selectedLanguage } = useLanguage();
  const { theme } = useTheme();
  

  useEffect(() => {
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
      className={classNames(`text-3xl md:text-5xl font-inter font-extrabold ${extraClasses}`, {
        "text-[#C6C6C6]": theme === 'dark',
        "text-[#242442]": theme === 'light',
        "max-w-[500px]": !downBreakPoint,
        "w-full": downBreakPoint
      })}
    >
      <span className="bg-gradient-to-r from-gradientBlue1 to-gradientBlue2 via-gradientBlue3 text-transparent bg-clip-text">
        Vinicius Perrone
      </span>
      <Typical
        key={typicalKey}
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
  const downBreakPoint = useMediaQuery({
    query: '(max-width: 985px)'
  });

  let description;

  if(selectedLanguage === 'en') description = descriptionInEnglish;

  else description = descriptionInPortuguese;

  return(
    <main 
      id="about" 
      className={classNames("pt-20 w-full min-h-[calc(100vh-80px)] flex", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light',
        "flex-row": !downBreakPoint,
        "flex-col-reverse": downBreakPoint
      })}
    >
      <div 
        className={classNames("w-full min-h-full flex flex-col", {
          "justify-center gap-20 pl-16 pt-32": !downBreakPoint,
          "gap-10 pt-10 pb-10": downBreakPoint
        })}
      >
        <TitleHighlighted 
          extraClasses={classNames("h-24", {
            "block": !downBreakPoint,
            "hidden": downBreakPoint
          })}
        />
        <p 
          className={classNames("font-open text-lg text-justify", {
            "text-gray-400": theme === 'dark',
            "text-[#64748B]": theme === 'light',
            "max-w-[60%] m-0": !downBreakPoint,
            "max-w-[90%] m-auto": downBreakPoint
          })}
        >
          {description}
        </p>
        <Code 
          downBreakPoint={downBreakPoint}
        />
      </div>
      <div 
        className={classNames("w-full min-h-full", {
          "px-0 py-0": !downBreakPoint,
          "py-5 px-5": downBreakPoint
        })}
      >
        <TitleHighlighted 
          extraClasses={classNames("h-[72px] mb-6", {
            "hidden": !downBreakPoint,
            "block": downBreakPoint
          })}
        />
        <Image 
          src="/images/bg_main_section.png"
          height={600}
          width={600}
          alt="Main Section"
          className={classNames({
            "mx-auto mt-5": downBreakPoint
          })}
        />
      </div>
    </main>
  )
}