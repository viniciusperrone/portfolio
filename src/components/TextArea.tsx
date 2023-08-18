import { HTMLAttributes } from "react";

type TextAreaProps = HTMLAttributes<HTMLTextAreaElement> &{
  extraClasses?: string;
};

export function TextArea({ extraClasses, ...rest }: TextAreaProps) {
  return(
    <textarea 
      className={`h-[200px] w-[90%] md:w-96 rounded-[8px] p-4 placeholder:text-[#94A3B8] resize-none ${extraClasses}`}
      {...rest}
    />
  )
}