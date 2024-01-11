import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";
import { 
  AiFillGithub, 
  AiFillInstagram, 
  AiFillFacebook, 
  AiFillLinkedin 
} from "react-icons/ai";

const socialMedias = [
  {
    key: 'github',
    href: 'http://github.com/viniciusperrone',
    icon: <AiFillGithub color="#94A3B8" className="w-[25px] md:w-[20px] h-[25px] md:h-[20px]" />
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/portfolio.projects/',
    icon: <AiFillInstagram color="#94A3B8" className="w-[25px] md:w-[20px] h-[25px] md:h-[20px]" />
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/vinicius.andrade.39982631',
    icon: <AiFillFacebook color="#94A3B8" className="w-[25px] md:w-[20px] h-[25px] md:h-[20px]" />
  },
  {
    key: 'linkedin',
    href: 'http://linkedin.com/in/vinicius-perrone/',
    icon: <AiFillLinkedin color="#94A3B8" className="w-[25px] md:w-[20px] h-[25px] md:h-[20px]" />
  }
]

export function Footer() {
  const { theme } = useTheme();
  const { selectedLanguage } = useLanguage();

  return(
    <footer 
      className={classNames("md:px-20 py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-5 md:gap-0", {
        "bg-purple-dark": theme === 'dark',
        "bg-white": theme === 'light'
      })}
    >
      <p className="text-sm font-inter font-normal text-[#94A3B8] break-all">
        © 2024 Vinicius Perrone, {selectedLanguage === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
      </p>
      <ol className="flex flex-row gap-4 items-center">
        {
          socialMedias.map(media => (
            <li key={media.key}>
              <a href={media.href} target="_blank">
                {media.icon}
              </a>
            </li>
          ))
        }
      </ol>
    </footer>
  )
}