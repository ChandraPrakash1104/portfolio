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
    <div ref={ref} className='group mb-3 sm:mb-8 last:mb-0'>
      <section className='duration-300 flex max-w-[57rem] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[23rem] transition text-white bg-[#006466]/15 hover:bg-[#006466]/30'>
        <div className='w-[28.25rem] flex-end p-8'>
          <Image
            src={imageUrl}
            alt='Project I worked on'
            quality={95}
            className='sm:order-last rounded-lg shadow-2xl
            transition object-top w-full h-full
            sm:group-hover:scale-[1.04] '
          />
        </div>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
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
