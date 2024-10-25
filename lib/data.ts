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
    title: 'Cozynest',
    description:
      'Cozynest is a full-stack ecommerce website for a furniture store, built using React, Node.js, Prisma, and PostgreSQL. It offers a visually appealing user interface, product catalog, shopping cart, user authentication, and an admin portal, integrating modern web technologies to deliver a seamless ecommerce experience.',
    tags: ['React.js', 'Node.js', 'Postgress', 'Tailwind', 'Prisma'],
    imageUrl: furniro,
    workingUrl: 'https://cozynest-livid.vercel.app/home',
    gitUrl: 'https://github.com/ChandraPrakash1104/cozynest',
  },
  {
    title: 'Bloghub',
    description:
      'Built with ReactJS, Hono, and Cloudflare Workers, this full-stack web application empowers users to create and manage their own blogs. Leveraging the power of ReactJS for the user interface, Hono for the backend, and Cloudflare Workers for scalable and secure hosting.',
    tags: [
      'React.js',
      'Hono',
      'Cloudflare Workers',
      'Postgress',
      'Tailwind',
      'Prisma',
    ],
    imageUrl: bloghub,
    workingUrl: '',
    gitUrl: 'https://github.com/ChandraPrakash1104/blog-hub',
  },
  {
    title: 'ChatHive',
    description:
      'A full stack web application, users can chat, send friends invitations, and foster real relationships. Leveraging technologies such as React, Material-UI, Node.js, Express, and MongoDB, the platform ensures a smooth and easy user experience to connect.',
    tags: ['React.js', 'Node.js', 'MongoDb', 'MUI', 'Socket.io'],
    imageUrl: chathive,
    workingUrl: '',
    gitUrl: 'https://github.com/ChandraPrakash1104/chat-hive',
  },
] as const;

export const skillsData = [
  {
    name: 'HTML',
    svgUrl: 'https://skillicons.dev/icons?i=html&theme=dark',
  },
  {
    name: 'CSS',
    svgUrl: 'https://skillicons.dev/icons?i=css&theme=dark',
  },
  {
    name: 'JavaScript',
    svgUrl: 'https://skillicons.dev/icons?i=javascript&theme=dark',
  },
  {
    name: 'TypeScript',
    svgUrl: 'https://skillicons.dev/icons?i=typescript&theme=dark',
  },
  {
    name: 'React',
    svgUrl: 'https://skillicons.dev/icons?i=react&theme=dark',
  },
  {
    name: 'Next.js',
    svgUrl: 'https://skillicons.dev/icons?i=next&theme=dark',
  },
  {
    name: 'Node.js',
    svgUrl: 'https://skillicons.dev/icons?i=nodejs&theme=dark',
  },
  {
    name: 'Git',
    svgUrl: 'https://skillicons.dev/icons?i=git&theme=dark',
  },
  {
    name: 'Tailwind',
    svgUrl: 'https://skillicons.dev/icons?i=tailwind&theme=dark',
  },
  {
    name: 'Prisma',
    svgUrl: 'https://skillicons.dev/icons?i=prisma&theme=dark',
  },
  {
    name: 'MongoDB',
    svgUrl: 'https://skillicons.dev/icons?i=mongodb&theme=dark',
  },
  {
    name: 'Redux',
    svgUrl: 'https://skillicons.dev/icons?i=redux&theme=dark',
  },
  {
    name: 'Express',
    svgUrl: 'https://skillicons.dev/icons?i=express&theme=dark',
  },
  {
    name: 'PostgreSQL',
    svgUrl: 'https://skillicons.dev/icons?i=postgresql&theme=dark',
  },
  {
    name: 'Docker',
    svgUrl: 'https://skillicons.dev/icons?i=docker&theme=dark',
  },
  {
    name: 'Postman',
    svgUrl: 'https://skillicons.dev/icons?i=postman&theme=dark',
  },
] as const;
