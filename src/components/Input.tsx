import { HTMLAttributes } from "react";

type InputProps = HTMLAttributes<HTMLInputElement> &{
  extraClasses?: string;
};

export function Input({ extraClasses, ...rest }: InputProps) {
  return(
    <input 
      className={`h-10 w-[90%] md:w-96 rounded-[8px] px-4 placeholder:text-[#94A3B8] ${extraClasses}`}
      {...rest}
    />
  )
}