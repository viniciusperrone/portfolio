import { Fragment } from "react";
import { BsArrowRight } from 'react-icons/bs';
import { techs } from '../mock/skills';
import { Tech } from './Tech';
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";

export function Skills() {
  const { selectedLanguage } = useLanguage();
  const { theme } = useTheme();

  return(
    <div 
      id="skills" 
      className={classNames("flex flex-col md:px-16 py-8 md:py-16", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light'
      })}
    >
      <div className="flex flex-col px-5">
        <span className="text-xl text-[#0EA5E9] font-inter font-semibold flex flex-row items-center gap-2">
          <BsArrowRight 
            color="#0EA5E9"
          />
          {selectedLanguage === 'en' ? 'Skills' : 'Habilidades'}
        </span>
        <h1 
          className={classNames("text-3xl md:text-5xl font-inter font-extrabold h-24 max-w-[500px]", {
            "text-white": theme === 'dark',
            "text-dark-default": theme === 'light' 
          })}
        >
          {selectedLanguage === 'en' ? 'Technologies I used': 'Tecnologias que uso'}
        </h1>
      </div>
      <div className='flex flex-row flex-wrap items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-5 gap-5 px-10'>
        {techs.map((tech, index) => {
          return (
            <Fragment key={index}>
              <Tech 
                key={tech.name}
                icon={tech.icon}
                extraClasses="hidden md:flex"
              />
              <div className="md:hidden">
                {tech.icon}
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}