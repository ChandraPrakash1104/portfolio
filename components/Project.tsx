'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { ImNewTab } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

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
    <div ref={ref} className='group mb-8'>
      <section className='duration-300 flex flex-col sm:grid sm:grid-cols-2 max-w-[57rem] rounded-lg overflow-hidden transition text-white bg-[#006466]/15 hover:bg-[#006466]/30 '>
        <div className='md:p-10'>
          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className='rounded-t-lg sm:rounded-lg
            transition object-top
            sm:group-hover:scale-[1.04] '
          />
        </div>
        <div className='p-6 md:py-10 md:pr-10 space-y-8'>
          <div className='text-2xl font-semibold flex justify-between'>
            {title}
            <div className='flex space-x-4'>
              {workingUrl.length > 0 && (
                <a href={workingUrl} target='_blank' rel='noopener noreferrer'>
                  <ImNewTab className='transition-all duration-300 text-[#bce1e3]/50 group-hover:text-[#bce1e3]/90' />
                </a>
              )}
              <a href={gitUrl} target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-[#bce1e3]/50 group-hover:text-[#bce1e3]/90' />
              </a>
            </div>
          </div>
          <p className='mt-2 leading-relaxed text-white/70'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='transition-all duration-300 bg-[#272640]/20 group-hover:bg-[#272640]/40 px-2 py-2 text-[0.7rem] uppercase tracking-wider rounded-lg text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Project;
