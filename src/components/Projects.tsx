import { useState, HTMLAttributes } from 'react';

import { BsArrowRight } from "react-icons/bs";

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
      className='py-1 px-3 rounded-full border-solid border-2 border-white bg-[#222334] cursor-pointer flex justify-center items-center transition-colors hover:opacity-90'
      {...rest}
    >
      <p className={`text-sm font-inter font-medium ${isSelected ? 'text-white' : 'text-[#94A3B8]'}`}>
        {category}
      </p>
    </span>
  )
}

export function Projects() {
  const [categorySelected, setCategorySelected] = useState<string>('All projects');

  return(
    <div 
      id="projects" 
      className="flex flex-col md:px-16 my-8 md:my-16"
    >
      <div className="flex flex-col px-5">
        <span className="text-xl text-[#0EA5E9] font-inter font-semibold flex flex-row items-center gap-2">
          <BsArrowRight 
            color="#0EA5E9"
          />
          Checkout my work
        </span>
        <h1 className="text-3xl md:text-5xl font-inter font-extrabold text-white h-20 max-w-[500px]">
          Projects I build
        </h1>
        <div className="flex flex-row gap-4">
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
    </div>
  )
}