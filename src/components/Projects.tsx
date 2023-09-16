import { useState, useRef, HTMLAttributes } from 'react';

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai"
import { ProjectProps, projects } from '@/mock/projects';
import { useTheme } from '@/hooks/useTheme';
import classNames from 'classnames';

const categoryProjects = ['All projects', 'Next.js', 'React.js', 'Node.js', 'React Native', 'Django'];

type PillProps = HTMLAttributes<HTMLSpanElement> & {
  category: string;
  isSelected?: boolean;
  isDark?: boolean
};

function Pill({ 
  category, 
  isSelected = false, 
  isDark = false,
  ...rest 
}: PillProps) {
  let extraClasse: string;

  if(isDark) {
    extraClasse = isSelected ? 'text-white' : 'text-[#94A3B8]'
  } else {
    extraClasse = isSelected ? 'text-default-dark' : 'text-[#94A3B8]'
  }

  return(
    <span 
      className={
        `
        py-1 px-3 rounded-full border-solid 
        border-[1px] cursor-pointer flex justify-center 
        items-center transition-colors hover:opacity-90 
        ${isDark ? 'border-white bg-[#222334]' : 'border-[#d2dada] bg-[#F4F6F6]'}
        `
      }
      {...rest}
    >
      <p className={`text-sm font-inter font-medium ${extraClasse}`}>
        {category}
      </p>
    </span>
  )
}

function CardProject(props: ProjectProps) {
  const icon = props?.icon || <AiOutlineLink size={20} color="#FFFFFF" />;

  const sectionRef = useRef<HTMLDivElement>(null);

  return(
    <div 
      className="p-3 min-w-[350px] max-w-[350px] min-h-[400px] max-h-[400px] rounded-[12px]"
      style={props?.style}
    >
      <img
        src={props.image}
        alt={props.title}
        className="rounded-[8px]"
      />
      <main className="w-full h-[152px] flex flex-col px-2 mt-2 overflow-y-scroll">
        <h2 className="text-2xl font-inter font-bold text-[#ffffff]">{props.title}</h2>
        <p className="text-base font-inter font-normal text-white">
          {props.description}
        </p>
      </main>
      <footer className="flex flex-row items-center justify-between mt-2 px-2">
        <h3 className="text-base font-inter font-semibold text-white">{props.year}</h3>
        <a href={props.href} target="_blank">
          {icon}
        </a>
      </footer>
    </div>
  )
}

export function Projects() {
  const [categorySelected, setCategorySelected] = useState<string>('All projects');
  const { theme } = useTheme();
  const projectsByCategory = projects.filter(project => project.categories.includes(categorySelected));


  return(
    <div 
      id="projects" 
      className={classNames("flex flex-col py-8 md:py-16", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light'
      })}
    >
      <div className="flex flex-col md:pl-16 px-5">
        <span className="text-xl text-[#0EA5E9] font-inter font-semibold flex flex-row items-center gap-2">
          <BsArrowRight 
            color="#0EA5E9"
          />
          Checkout my work
        </span>
        <h1 className={classNames("text-3xl md:text-5xl font-inter font-extrabold h-20 max-w-[500px]", {
          "text-white": theme === 'dark',
          "text-dark-default": theme === 'light'
        })}>
          Projects I build
        </h1>
        <div className="flex flex-row flex-wrap gap-4">
          {
            categoryProjects.map((category, index) => (
              <Pill 
                key={index} 
                category={category} 
                isSelected={category===categorySelected}
                onClick={() => setCategorySelected(category)}
                isDark={theme==='dark'}
              />
            ))
          }
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div 
          className="remove-visual-scrollbar flex flex-row gap-8 py-20 px-16 overflow-x-scroll"
          onScroll={e => {
            const element = e.currentTarget;
            const scrollPosition = element.scrollLeft;

            if(scrollPosition > 64) {
              element.style.paddingLeft = "0";
            } else {
              element.style.paddingLeft = "64px";
            }
          }}
        >
          {
            projectsByCategory.map(project => <CardProject key={project.id} {...project} />)
          }
        </div>
      </div>
    </div>
  )
}