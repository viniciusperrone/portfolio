import { Logo } from "@/assets/images/Logo";
import classNames from "classnames";
import { BsArrow90DegLeft, BsWhatsapp } from "react-icons/bs";
import { AddressBook, Book, BracketsAngle, Hammer } from "@phosphor-icons/react";
import { motion, AnimatePresence } from 'framer-motion';

export type DrawerProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const listAnchor = [
  {
    id: 0,
    icon: <Book size={32} color="white" />,
    name: 'Sobre',
    anchor: 'about'
  },
  {
    id: 1,
    icon: <Hammer size={32} color="white" />,
    name: 'Habilidades',
    anchor: 'skills'
  },
  {
    id: 2,
    icon: <BracketsAngle size={32} color="white" />,
    name: 'Projetos',
    anchor: 'projects'
  },
  {
    id: 3,
    icon: <AddressBook size={32} color="white" />,
    name: 'Contato',
    anchor: 'contact'
  }
];

export function Drawer({ open, onClose }: Omit<DrawerProps, 'onOpen'>) {
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
        className={classNames("fixed inset-y-0 left-0 flex flex-col z-10 bg-purple-dark w-screen h-screen px-5", {
          "flex sm:hidden": open,
          "hidden": !open
        })}
        initial={{ x: open ? 300 : 0 }} // Posição inicial fora da tela à direita
        animate={{ x: open ? 0 : 300 }} // Posição final no centro da tela
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      >
        <header className="w-full h-20 flex items-center justify-between">
          <BsArrow90DegLeft 
            color="white"
            size={26}
            onClick={onClose}
          />
          <Logo />
          <div />
        </header>
        <ol className="flex-1 flex flex-col gap-5 px-5 pt-14">
          {
            listAnchor.map(item => {
              return (
                <span 
                  className="flex flex-row gap-5"
                  onClick={() => onSelectSection(item.anchor)}
                >
                  {item.icon}
                  <p className="text-xl font-inter font-medium text-white">
                    {item.name}
                  </p>
                </span>
              )
            })
          }
        </ol>
        <button className="w-full my-10 self-end rounded-lg bg-[#2EDC6D] h-12 flex justify-between items-center px-5 text-lg font-inter font-semibold text-white">
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