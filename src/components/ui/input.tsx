import { cn } from "@/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-10 w-[90vw] md:w-96 rounded-[8px] px-4 placeholder:text-[#94A3B8]",
          className
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
