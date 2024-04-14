'use client';

import React from 'react';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/hooks/useSectionInView';
import SectionHeading from '../SectionHeading';
import SkillIcon from './SkillIcon';

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[65rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-8'>
        {skillsData.map((skill, index) => (
          <li
            className='rounded-lg px-5 py-3 bg-[#272640]/20 hover:bg-[#272640]/40 transition-all duration-300'
            key={index}
          >
            <div className='w-8'>
              <SkillIcon src={skill.svgUrl} name={skill.name} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
