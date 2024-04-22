'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { CiGlobe } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  workingUrl,
  gitUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className='group lg-8 relative  mb-8'
      initial={{
        opacity: 0,
        y: 150,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        opacity: { duration: 1 },
        y: { duration: 0.5 },
      }}
      viewport={{
        once: true,
      }}
    >
      <motion.div
        className='duration-300 flex flex-col lg:grid lg:grid-cols-2
       h-full  lg:max-w-[65rem] rounded-lg overflow-hidden transition text-font-primary bg-[#006466]/15 hover:bg-[#006466]/30 max-w-[28.25rem] ring-1 ring-highlight/30 ring-offset-0 '
        whileHover={{ scale: 1.005 }}
      >
        <div className='lg:p-8 lg:relative overflow-hidden'>
          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className='rounded-t-lg lg:rounded-lg
            transition object-top
            sm:group-hover:scale-[1.04] lg:w-full lg:h-full lg:absolute'
          />
        </div>
        <div className='p-6 sm:py-10 sm:pr-10 space-y-8'>
          <div className='text-2xl font-semibold flex justify-between'>
            {title}
            <div className='flex space-x-4'>
              {workingUrl.length > 0 && (
                <a href={workingUrl} target='_blank' rel='noopener noreferrer'>
                  <CiGlobe className='transition-all text-accent group-hover:text-font-secondary' />
                </a>
              )}
              <a href={gitUrl} target='_blank' rel='noopener noreferrer'>
                <FaGithub className='transition-all text-accent group-hover:text-font-secondary' />
              </a>
            </div>
          </div>
          <p className='mt-2 leading-relaxed text-font-primary'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='transition-all duration-300 bg-[#272640]/20 group-hover:bg-[#272640]/40 px-2 py-2 text-[0.7rem] uppercase tracking-wider rounded-lg text-font-primary'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
