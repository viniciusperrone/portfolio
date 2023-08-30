import Image from "next/image";

import { Logo } from "../assets/images/Logo";
import { RiMenu4Line } from "react-icons/ri";
import { ToggleTheme } from "./ToggleTheme";
import { DrawerProps as HeaderProps } from "./Drawer";
import { useLanguage } from "@/hooks/useLanguage";

const HREF_PT = '/images/brasil-icon.svg';
const HREF_EN = '/images/estados-unidos-icon.svg';

export function Header({ onOpen }: Omit<HeaderProps, 'onClose' | 'open'>) {
  const { selectedLanguage, onChangeLanguage } = useLanguage();

  const countryLanguage = selectedLanguage === 'pt' ? HREF_PT : HREF_EN;

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
          src={countryLanguage}
          height={30}
          width={30}
          alt={`${selectedLanguage} language`}
          className="cursor-pointer"
          onClick={onChangeLanguage}
        />
        <RiMenu4Line
          color="#FBFBFB"
          className="h-6 w-6 block cursor-pointer md:hidden"
          onClick={onOpen}
        />
      </div>
    </header>
  )
}