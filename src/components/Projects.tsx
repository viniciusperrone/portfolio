import { useState, HTMLAttributes } from 'react';

import { BsArrowRight } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai"
import { ProjectProps, projetcs } from '@/mock/projects';

const categoryProjects = ['All projects', 'Next.js', 'React.js', 'Node.js', 'React Native', 'Django'];

type PillProps = HTMLAttributes<HTMLSpanElement> & {
  category: string;
  isSelected?: boolean;
};

function Pill({ 
  category, 
  isSelected = false, 
  ...rest 
}: PillProps) {

  return(
    <span 
      className='py-1 px-3 rounded-full border-solid border-[1px] border-white bg-[#222334] cursor-pointer flex justify-center items-center transition-colors hover:opacity-90'
      {...rest}
    >
      <p className={`text-sm font-inter font-medium ${isSelected ? 'text-white' : 'text-[#94A3B8]'}`}>
        {category}
      </p>
    </span>
  )
}

function CardProject(props: ProjectProps) {
  const icon = props?.icon || <AiOutlineLink size={20} color="#FFFFFF" />;
  return(
    <div 
      className="p-3 min-w-[350px] min-h-[350px] rounded-[12px]"
      style={props?.style}
    >
      <img 
        src={props.image}
        alt={props.title}
        className="rounded-[8px]"
      />
      <main className="w-full flex flex-col px-2 mt-2">
        <h2 className="text-2xl font-inter font-bold text-[#1E293B]">{props.title}</h2>
        <p className="text-base font-inter font-normal text-white">
          {props.description}
        </p>
      </main>
      <footer className="flex flex-row items-center justify-between mt-2 px-2">
        <h3 className="text-base font-inter font-semibold text-white">2022</h3>
        {icon}
      </footer>
    </div>
  )
}

export function Projects() {
  const [categorySelected, setCategorySelected] = useState<string>('All projects');

  return(
    <div 
      id="projects" 
      className="flex flex-col my-8 md:my-16"
    >
      <div className="flex flex-col md:pl-16 px-5">
        <span className="text-xl text-[#0EA5E9] font-inter font-semibold flex flex-row items-center gap-2">
          <BsArrowRight 
            color="#0EA5E9"
          />
          Checkout my work
        </span>
        <h1 className="text-3xl md:text-5xl font-inter font-extrabold text-white h-20 max-w-[500px]">
          Projects I build
        </h1>
        <div className="flex flex-row flex-wrap gap-4">
          {
            categoryProjects.map((category, index) => (
              <Pill 
                key={index} 
                category={category} 
                isSelected={category===categorySelected} 
              />
            ))
          }
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div 
          className="remove-visual-scrollbar flex flex-row gap-8 pt-10 pb-20 px-16 overflow-x-scroll"
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
            projetcs.map(project => <CardProject key={project.id} {...project}/>)
          }
        </div>
      </div>
    </div>
  )
}