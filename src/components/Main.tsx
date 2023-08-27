import Image from "next/image";
import Typical from 'react-typical';
import { BsArrow90DegLeft } from "react-icons/bs";

import { Code } from "./Code";
import { Button } from "./Button";

function TitleHighlighted({ extraClasses }: any) {
  return(
    <h1 className={`text-3xl md:text-5xl font-inter font-extrabold text-[#C6C6C6] w-full md:max-w-[500px] ${extraClasses}`}>
      <span className="bg-gradient-to-r from-gradientBlue1 to-gradientBlue2 via-gradientBlue3 text-transparent bg-clip-text">
        Vinicius Perrone
      </span>
      <Typical
        steps={[', a Mobile Developer.', 1000, ', a Web Developer.', 1000, ', a FullStack Developer.', 1000]}
        loop={Infinity}
        wrapper="span"
      />
    </h1>
  )
}

export function Main() {
  return(
    <main id="about" className="w-full min-h-[calc(100vh-80px)] flex flex-col-reverse md:flex-row">
      <div className="w-full min-h-full flex flex-col md:justify-center md:pl-16 gap-10 md:gap-20 pt-10 md:pt-32 pb-10">
        <TitleHighlighted extraClasses="h-24 hidden md:block" />
        <p className="font-open text-lg text-gray-400 max-w-[90%] m-auto md:m-0 md:max-w-[60%] text-justify">
          👋 Olá, meu nome é Vinicius. Sou apaixonado por 
          tecnologias e por músicas. Desenvolvo sistemas
          para desktop e mobile, sempre estou aberto a 
          aprender coisas novas. Busco sempre desenvolver
          as melhores soluções, prezando uma boa dinâmica e
          a flexibilidade nas necessidades dos usuários.
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
        {/* <div className="w-full h-full flex justify-center mt-32">
          <Button />
        </div> */}
      </div>
    </main>
  )
}