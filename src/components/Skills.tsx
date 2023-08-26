import { BsArrowRight } from 'react-icons/bs';
import { techs } from '../mock/skills';
import { Tech } from './Tech';

export function Skills() {

  return(
    <div id="skills" className="flex flex-col md:px-16 my-8 md:my-16">
      <div className="flex flex-col px-5">
        <span className="text-xl text-[#0EA5E9] font-inter font-semibold flex flex-row items-center gap-2">
          <BsArrowRight 
            color="#0EA5E9"
          />
          Skills
        </span>
        <h1 className="text-3xl md:text-5xl font-inter font-extrabold text-white h-24 max-w-[500px]">
          Technologies I used
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 px-10'>
        {techs.map((tech) => (
          <Tech 
            key={tech.name}
            icon={tech.icon}
          />
        ))}
      </div>
    </div>
  )
}