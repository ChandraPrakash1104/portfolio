import chathive from '@/public/chathive.png';
import bloghub from '@/public/bloghub.png';
import furniro from '@/public/furniro.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  // {
  //   name: 'Experience',
  //   hash: '#experience',
  // },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: '',
    location: '',
    description: '',
    icon: '',
    date: '',
  },
] as const;

export const projectsData = [
  {
    title: 'Furniro',
    description:
      'Furniro is a full-stack ecommerce website for a furniture store, built using React, Node.js, Prisma, and PostgreSQL. It offers a visually appealing user interface, product catalog, shopping cart, user authentication, and an admin portal, integrating modern web technologies to deliver a seamless ecommerce experience.',
    tags: ['React.js', 'Node.js', 'Postgress', 'Tailwind', 'Prisma'],
    imageUrl: furniro,
    workingUrl: 'https://furniro-livid.vercel.app/home',
    gitUrl: 'https://github.com/ChandraPrakash1104/furniro',
  },
  {
    title: 'Bloghub',
    description:
      'Built with ReactJS, Hono, and Cloudflare Workers, this full-stack web application empowers users to create and manage their own blogs. Leveraging the power of ReactJS for the user interface, Hono for the backend, and Cloudflare Workers for scalable and secure hosting.',
    tags: ['React.js', 'Node.js', 'Postgress', 'Tailwind', 'Prisma'],
    imageUrl: bloghub,
    workingUrl: '',
    gitUrl: 'https://github.com/ChandraPrakash1104/blog-hub',
  },
  {
    title: 'ChatHive',
    description:
      'A full stack web application, users can chat, send friends invitations, and foster real relationships. Leveraging technologies such as React, Material-UI, Node.js, Express, and MongoDB, the platform ensures a smooth and easy user experience to connect.',
    tags: ['React.js', 'Node.js', 'Postgress', 'Tailwind', 'Prisma'],
    imageUrl: chathive,
    workingUrl: '',
    gitUrl: 'https://github.com/ChandraPrakash1104/chat-hive',
  },
] as const;

export const skillsData = [
  {
    name: 'HTML',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Node.js',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    name: 'Git',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'Tailwind',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Prisma',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
  },
  {
    name: 'MongoDB',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Redux',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
  },
  {
    name: 'Express',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    name: 'PostgreSQL',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg',
  },
  {
    name: 'Docker',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    name: 'Postman',
    svgUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
] as const;
