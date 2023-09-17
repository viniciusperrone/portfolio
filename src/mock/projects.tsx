import { CSSProperties } from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  categories: string[];
  image: string;
  year: string;
  href: string;
  icon?: JSX.Element;
  style?: CSSProperties;
};

export const categoryProjects = ['All projects', 'Next.js', 'React.js', 'Node.js', 'React Native', 'Django'];

export const projects = [
  {
    id: 0,
    title: 'UBEMath',
    description: 
    {
      pt: `
        🕹 O projeto UBEMath é uma solução para dificuldades sofridas em matemática
        pelos alunos do 9º ano, é composto por uma plataforma web e uma plataforma 2D
        jogo desenvolvido para o "TCC" da Fundação Matias Machline (FMM)
      `,
      en:  `
        🕹 The UBEMath project is a solution for Math difficulties suffered
        by 9th-grade students, it consists of a web platform and a 2D
        game developed for the "TCC" at Fundação Matias Machline (FMM)
      `
    },
    image: '/images/ubemath.png',
    categories: ['All projects', 'React.js', 'Node.js'],
    year: '2020',
    href: 'https://ubemath.netlify.app',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(90deg, rgba(122,223,187,1) 40%, rgba(166,236,224,1) 80%, rgba(166,236,224,1) 100%)",
      transform: "rotate(5deg)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #60efff, 0 0 40px #00ff87`
    }
  },
  {
    id: 1,
    title: 'FoodFast',
    description: {
      pt: `
        🍽 O projeto FoodFast é um aplicativo para automatizar alimentos
        organização e o processo de fabricação de receitas
      `,
      en:  `
        🍽 The FoodFast project is an application to automate food 
        organization and the recipe making process
      `
    },
    image: '/images/foodfast.svg',
    categories: ['All projects', 'React Native', 'Node.js'],
    year: '2021',
    href: 'https://github.com/viniciusperrone/FoodFast',
    icon: <AiFillGithub size={22} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(90deg, rgba(93,129,152,1) 40%, rgba(129,159,177,1) 80%, rgba(129,159,177,1) 100%)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #819fb1, 0 0 40px #819fb1`
    }
  },
  {
    id: 2,
    title: 'Ignite Lab',
    description: { 
      pt: `
        🚀 O projeto Ignite Lab é uma especialização em React para
        desenvolvedores para alcançar seu próximo nível.
      `,
      en: `
        🚀 The Ignite Lab project is a specialization in React for 
        developers to reach their next level.
      `
    },
    image: "images/ignite-lab.png",
    categories: ['All projects', 'React.js'],
    year: '2022',
    href: 'https://ignite-lab-sigma-lovat.vercel.app/',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(90deg, rgba(0,224,157,1) 40%, rgba(0,184,129,1) 80%, rgba(0,135,95,1) 100%)",
      transform: "rotate(-1deg)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #00b881, 0 0 40px #00875f`
    }
  },
  {
    id: 3,
    title: 'Rocket Help',
    description: {
      pt: `
        🏳 Equipamentos de hardware auxiliam na solicitação de aplicação.
      `,
      en:  `
        🏳 Hardware equipment help request application.
      `
    },
    image: 'images/rocket.svg',
    categories: ['All projects', 'React Native', 'React Native', 'Node.js'],
    year: '2022',
    href: 'https://github.com/viniciusperrone/Rocket-Help',
    icon: <AiFillGithub size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #f9a8d3, 0 0 40px #f9a8d3`,
      transform: "rotate(-5deg)"
    }
  },
  {
    id: 4,
    title: 'Klutch-Tech',
    description: {
      pt: `
        🏦 Simulação de solicitação de empréstimo bancário.
      `,
      en:  `
        🏦 Bank loan application simulation.
      `
    },
    image: "images/klutch-test.png",
    categories: ['All projects', 'Next.js', 'React.js', 'Django'],
    year: '2022',
    href: 'https://klutch-tech.vercel.app',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(90deg, rgba(253,207,155,1) 40%, rgba(252,188,115,1) 80%, rgba(240,130,5,1) 100%)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #F08205, 0 0 40px #F08205`
    }
  }
];
      