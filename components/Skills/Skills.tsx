'use client';

import React from 'react';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/hooks/useSectionInView';
import SectionHeading from '../SectionHeading';
import SkillIcon from './SkillIcon';
import { motion } from 'framer-motion';

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 px-8 max-w-[60rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-8'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='w-14'>
              <SkillIcon
                src={skill.svgUrl}
                name={skill.name}
                delay={index / 10}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
