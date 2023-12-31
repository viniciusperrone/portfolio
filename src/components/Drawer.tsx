import { Logo } from "@/assets/images/Logo";
import classNames from "classnames";
import { BsArrow90DegLeft, BsWhatsapp } from "react-icons/bs";
import { AddressBook, Book, BracketsAngle, Hammer } from "@phosphor-icons/react";
import { motion, AnimatePresence } from 'framer-motion';
import { useSendMessage } from "@/hooks/useSendMessage";
import { useTheme } from "@/hooks/useTheme";
import { getIconComponent } from "@/utils/getIcon";

export type DrawerProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const listAnchor = [
  {
    id: 0,
    icon: 'book',
    name: 'Sobre',
    anchor: 'about'
  },
  {
    id: 1,
    icon: 'hammer',
    name: 'Habilidades',
    anchor: 'skills'
  },
  {
    id: 2,
    icon: 'bracket',
    name: 'Projetos',
    anchor: 'projects'
  },
  {
    id: 3,
    icon: 'address',
    name: 'Contato',
    anchor: 'contact'
  }
];

export function Drawer({ open, onClose }: Omit<DrawerProps, 'onOpen'>) {
  const { sendMessage } = useSendMessage();
  const { theme } = useTheme();
  
  function onSelectSection(id: string) {
    onClose();

    onClickAnchorRef(id);
  }

  function onClickAnchorRef(id: string) {
    const sectionRef = document.getElementById(id);

    if(!sectionRef) return;

    sectionRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <AnimatePresence>
      <motion.div 
        className={classNames("fixed inset-y-0 left-0 flex flex-col z-10 w-screen h-screen px-5", {
          "flex sm:hidden": open,
          "hidden": !open,
          "bg-purple-dark": theme === 'dark',
          "bg-white": theme === 'light'
        })}
        initial={{ x: open ? 300 : 0 }} // Posição inicial fora da tela à direita
        animate={{ x: open ? 0 : 300 }} // Posição final no centro da tela
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      >
        <header className="w-full h-20 flex items-center justify-between">
          <BsArrow90DegLeft 
            color={theme === 'dark' ? "white" : '#A0A0A0'}
            size={26}
            onClick={onClose}
          />
          <Logo theme={theme} />
          <div />
        </header>
        <ol className="flex-1 flex flex-col gap-5 px-5 pt-14">
          {
            listAnchor.map(item => {
              const iconComponent = getIconComponent(item.icon, theme);

              return (
                <span
                  key={item.id}
                  className="flex flex-row gap-5"
                  onClick={() => onSelectSection(item.anchor)}
                >
                  {iconComponent}
                  <p 
                    className={classNames("text-xl font-inter font-medium", {
                      "text-white": theme === 'dark',
                      "text-[#A0A0A0]": theme === 'light'
                    })}
                  >
                    {item.name}
                  </p>
                </span>
              )
            })
          }
        </ol>
        <button 
          className="w-full my-10 self-end rounded-lg bg-[#2EDC6D] h-12 flex justify-between items-center px-5 text-lg font-inter font-semibold text-white"
          onClick={sendMessage}
        >
          <BsWhatsapp
            color="white"
            size={30}
          />
          ENVIAR MENSAGEM
          <div />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}