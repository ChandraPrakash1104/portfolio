'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[65rem] text-center text-font-primary leading-8 sm:mb-40 scroll-mt-28'
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I&apos;m a student and a{' '}
        <span className='font-medium'>full-stack web developer</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software
        developer.
      </p>
    </section>
  );
}
