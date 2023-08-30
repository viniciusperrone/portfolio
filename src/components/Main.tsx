import Image from "next/image";
import Typical from 'react-typical';
import { Code } from "./Code";
import { useLanguage } from "@/hooks/useLanguage";

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

  const kindDeveloper = selectedLanguage === 'en' ? developerEnglish : developerPortuguese;

  return(
    <h1 className={`text-3xl md:text-5xl font-inter font-extrabold text-[#C6C6C6] w-full md:max-w-[500px] ${extraClasses}`}>
      <span className="bg-gradient-to-r from-gradientBlue1 to-gradientBlue2 via-gradientBlue3 text-transparent bg-clip-text">
        Vinicius Perrone
      </span>
      <Typical
        steps={[`, ${kindDeveloper[0]}`, 1000, `, ${kindDeveloper[1]}`, 1000, `, ${kindDeveloper[2]}`, 1000]}
        loop={Infinity}
        wrapper="span"
      />
    </h1>
  )
}

export function Main() {
  const { selectedLanguage } = useLanguage();

  let description;

  if(selectedLanguage === 'en') description = descriptionInEnglish;
  else description = descriptionInPortuguese;

  return(
    <main id="about" className="w-full min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row">
      <div className="w-full min-h-full flex flex-col md:justify-center md:pl-16 gap-10 md:gap-20 pt-10 md:pt-32 pb-10">
        <TitleHighlighted extraClasses="h-24 hidden md:block" />
        <p className="font-open text-lg text-gray-400 max-w-[90%] m-auto md:m-0 md:max-w-[60%] text-justify">
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