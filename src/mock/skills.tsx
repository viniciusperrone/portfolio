import * as F from 'react-icons/fa';
import * as S from 'react-icons/si';
import { AWSIcon } from '../components/AWSIcon';
import { MySQLIcon } from '../components/MySQLIcon';
import Image from 'next/image';
import { FastifyIcon } from '@/components/FastifyIcon';

export const techs = [
  {
    key: 'next.js',
    name: 'Next.js',
    icon: <S.SiNextdotjs color="#64748B" size={40} />
  },
  {
    key: 'react.js',
    name: 'React.js',
    icon: <F.FaReact color="#0074a6" size={40} />
  },
  {
    key: 'react-native',
    name: 'React Native',
    icon: <F.FaReact color="#149eca" size={40} />
  },
  {
    key: 'node.js',
    name: 'Node.js',
    icon: <F.FaNodeJs color="#43853d" size={40} />
  },
  {
    key: 'nest.js',
    name: 'Nest.js',
    icon: <S.SiNestjs color="#ea2845" size={40} />
  },
  {
    key: 'typescript',
    name: 'Typescript',
    icon: <S.SiTypescript color="#235a97" size={40} />
  },
  {
    key: 'javascript',
    name: 'Javascript',
    icon: <S.SiJavascript color="#FCDC00" size={40} />
  },
  {
    key: 'prisma',
    name: 'Prisma',
    icon: <S.SiPrisma color="#4C51BF" size={40} />
  },
  {
    key: 'graphql',
    name: 'GraphQL',
    icon: <S.SiGraphql color="#E10098" size={40} />
  },
  {
    key: 'django',
    name: 'Django',
    icon: <S.SiDjango color="#0C4B33" size={40} />
  },
  {
    key: 'python',
    name: 'Python',
    icon: <S.SiPython color="#3776ab" size={40} />
  },
  {
    key: 'tailwind',
    name: 'Tailwind',
    icon: <S.SiTailwindcss color="#0EA5E9" size={40} />
  },
  {
    key: 'styled-componentes',
    name: 'Styled-Components',
    icon: <Image src="/images/styled-components.png" alt="" width={40} height={40} />
  },
  {
    key: 'material-ui',
    name: 'Material UI',
    icon: <S.SiMui color="#0EA5E9" size={40} />
  },
  {
    key: 'mongo-db',
    name: 'MongoDB',
    icon: <S.SiMongodb color="#116149" size={40} />
  },
  {
    key: 'postgres',
    name: 'Postgres',
    icon: <S.SiPostgresql color="#3776ab" size={40} />
  },
  {
    key: 'express',
    name: 'Express.js',
    icon: <S.SiExpress color="#64748B" size={40} />
  },
  {
    key: 'fastify',
    name: 'Fastify',
    icon: <FastifyIcon />
  },
  {
    key: 'mysql',
    name: 'MySQL',
    icon: <MySQLIcon />
  },
  {
    key: 'docker',
    name: 'Docker',
    icon: <F.FaDocker color="#0EA5E9" size={40} />
  },
  {
    key: 'aws',
    name: 'AWS',
    icon: <AWSIcon />
  }
];