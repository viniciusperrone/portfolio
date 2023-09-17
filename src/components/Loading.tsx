import { useTheme } from "@/hooks/useTheme";
import { LogoAnimated } from "../assets/images/LogoAnimated";
import classNames from "classnames";

export function LoadingPage() {
  const { theme } = useTheme();
  return(
    <div 
      className={classNames("w-full h-screen flex justify-center items-center", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light'
      })}
    >
      <LogoAnimated 
        height={450}
        width={330}
        theme={theme}
      />
    </div>
  )
}