import { LogoAnimated } from "../assets/images/LogoAnimated";

export function LoadingPage() {
  return(
    <div className="w-full h-screen flex justify-center items-center">
      <LogoAnimated 
        height={450}
        width={330}
      />
    </div>
  )
}