import Image from "next/image";

import { Logo } from "../assets/images/Logo";
import { RiMenu4Line } from "react-icons/ri";
import { ToggleTheme } from "./ToggleTheme";
import { DrawerProps as HeaderProps } from "./Drawer";
import { useLanguage } from "@/hooks/useLanguage";
import classNames from "classnames";
import { useTheme } from "@/hooks/useTheme";

const HREF_PT = '/images/brasil-icon.svg';
const HREF_EN = '/images/estados-unidos-icon.svg';

const listButtons = [
  {
    id: 0,
    anchor: 'about',
    pt: 'Sobre',
    en: 'About'
  },
  {
    id: 1,
    anchor: 'skills',
    pt: 'Habilidades',
    en: 'Skills'
  },
  {
    id: 2,
    anchor: 'projects',
    pt: 'Projetos',
    en: 'Projects'
  }, 
  {
    id: 3,
    anchor: 'contact',
    pt: 'Contato',
    en: 'Contact'
  }
];

export function Header({ onOpen }: Omit<HeaderProps, 'onClose' | 'open'>) {
  const { selectedLanguage, onChangeLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

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
    <header 
      className={classNames("w-full h-20 border-solid border-b-2 border-purple-900 flex flex-row justify-between items-center px-8 md:px-20", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light'
      })}
    >
      <Logo 
        theme={theme}
      />
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-10">
            {
              listButtons.map(button => (
                <li key={button.id}>
                  <a 
                    className={classNames("anchor-nav cursor-pointer relative font-inter font-medium text-gray-default text-base", {
                      "text-gray-default": theme === 'dark',
                      "text-[#A0A0A0]": theme === 'light'
                    })}
                    onClick={() => onClickAnchorRef(button.anchor)}
                  >
                    {button[selectedLanguage]}
                  </a>
                </li>
              ))
            }
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