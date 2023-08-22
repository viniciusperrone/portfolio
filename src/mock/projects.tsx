import { CSSProperties } from "react";
import { AiOutlineLink } from "react-icons/ai";

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

export const projetcs: ProjectProps[] = [
  {
    id: 0,
    title: 'UBEMath',
    description: `
      The UBEMath project is a solution for Math difficulties suffered
      by 9th-grade students, it consists of a web platform and a 2D
      game developed for the "TCC" at Fundação Matias Machline (FMM)
    `,
    image: '/images/ubemath.png',
    categories: ['All projects', 'React.js', 'Node.js'],
    year: '2022',
    href: 'https://ubemath.netlify.app',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      transform: "rotate(5deg)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #f9a8d3, 0 0 40px #f9a8d3`
    }
  },
  {
    id: 1,
    title: 'UBEMath',
    description: `
      The UBEMath project is a solution for Math difficulties suffered
      by 9th-grade students, it consists of a web platform and a 2D
      game developed for the "TCC" at Fundação Matias Machline (FMM)
    `,
    image: '/images/ubemath.png',
    categories: ['All projects', 'React.js', 'Node.js'],
    year: '2022',
    href: 'https://ubemath.netlify.app',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #f9a8d3, 0 0 40px #f9a8d3`
    }
  },
  {
    id: 2,
    title: 'UBEMath',
    description: `
      The UBEMath project is a solution for Math difficulties suffered
      by 9th-grade students, it consists of a web platform and a 2D
      game developed for the "TCC" at Fundação Matias Machline (FMM)
    `,
    image: "images/ubemath.png",
    categories: ['All projects', 'React.js', 'Node.js'],
    year: '2022',
    href: 'https://ubemath.netlify.app',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      transform: "rotate(-1deg)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #f9a8d3, 0 0 40px #f9a8d3`
    }
  },
  {
    id: 3,
    title: 'UBEMath',
    description: `
      The UBEMath project is a solution for Math difficulties suffered
      by 9th-grade students, it consists of a web platform and a 2D
      game developed for the "TCC" at Fundação Matias Machline (FMM)
    `,
    image: 'images/ubemath.png',
    categories: ['All projects', 'React.js', 'Node.js'],
    year: '2022',
    href: 'https://ubemath.netlify.app',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #f9a8d3, 0 0 40px #f9a8d3`,
      transform: "rotate(-5deg)"
    }
  },
  {
    id: 4,
    title: 'UBEMath',
    description: `
      The UBEMath project is a solution for Math difficulties suffered
      by 9th-grade students, it consists of a web platform and a 2D
      game developed for the "TCC" at Fundação Matias Machline (FMM)
    `,
    image: "images/ubemath.png",
    categories: ['All projects', 'React.js', 'Node.js'],
    year: '2022',
    href: 'https://ubemath.netlify.app',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.1), 0 15px 50px rgba(0, 0, 0, 0.1), 0 0 20px #f9a8d3, 0 0 40px #f9a8d3`
    }
  }
];