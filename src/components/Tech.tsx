import { useState } from "react";

type TechProps = {
  icon: JSX.Element;
  extraClasses?: string
};

export function Tech({ icon, extraClasses }: TechProps) {
  const [hover, setHover] = useState<boolean>(false);
  
  return(
    <div
      className={`w-full h-20 rounded-2xl border-solid border-2 border-[#C6C6C6] flex justify-center items-center relative overflow-hidden ${extraClasses}`}
      style={{
        filter: hover ? undefined : "grayscale(100%)"
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {icon}
    </div>
  )
}