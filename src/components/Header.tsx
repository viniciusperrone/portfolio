import Image from "next/image";

import { Logo } from "../assets/images/Logo";
import { RiMenu4Line } from "react-icons/ri";
import { ToggleTheme } from "./ToggleTheme";

export function Header() {
  function onClickAnchorRef(id: string) {
    const sectionRef = document.getElementById(id);

    if(!sectionRef) return;

    sectionRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return(
    <header className="w-full h-20 border-solid border-b-2 border-purple-900 flex flex-row justify-between items-center px-8 md:px-20">
      <Logo />
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-10">
          <li>
            <a 
              className="anchor-nav relative font-inter font-medium text-gray-default text-base"
              // href="/sobre"
              onClick={() => onClickAnchorRef("about")}
            >
              Sobre
            </a>
          </li>
          <li>
            <a 
              className="anchor-nav relative font-inter font-medium text-gray-default text-base"
              // href="/habilidades"
              onClick={() => onClickAnchorRef("skills")}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a 
              className="anchor-nav relative font-inter font-medium text-gray-default text-base"
              // href="/projetos"
              onClick={() => onClickAnchorRef("projects")}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              className="anchor-nav relative font-inter font-medium text-gray-default text-base"
              // href="/contato"
              onClick={() => onClickAnchorRef("contact")}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row justify-center items-center gap-4">
        <ToggleTheme />
        <Image 
          src="/images/brasil-icon.svg"
          height={30}
          width={30}
          alt="brazilian language"
          className="cursor-pointer"
        />
        <RiMenu4Line
          color="#FBFBFB"
          className="h-6 w-6 block cursor-pointer md:hidden"
        />
      </div>
    </header>
  )
}