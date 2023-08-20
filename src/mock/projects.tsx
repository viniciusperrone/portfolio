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
    href: '',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      transform: "rotate(5deg)"
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
    href: '',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      transform: "rotate(5deg)"
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
    href: '',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      transform: "rotate(5deg)"
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
    href: '',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      transform: "rotate(5deg)"
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
    href: '',
    icon: <AiOutlineLink size={20} color="#FFFFFF"/>,
    style: {
      background: "linear-gradient(45deg, rgba(139,92,246,1) 40%, rgba(249,168,211,1) 80%, rgba(249,168,211,1) 100%)",
      transform: "rotate(5deg)"
    }
  }
];