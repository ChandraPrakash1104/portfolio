'use client';

import { activeSectionState, timeOfLastClickState } from '@/store/activeState';
import { useSectionInView } from '@/hooks/useSectionInView';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useSetRecoilState } from 'recoil';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const setActiveSection = useSetRecoilState(activeSectionState);
  const setTimeOfLastClick = useSetRecoilState(timeOfLastClickState);

  return (
    <div
      ref={ref}
      id='home'
      className='mt-52 mb-28 max-w-[65rem] text-center sm:mb-0 scroll-mt-[100rem] text-slate-300'
    >
      <div className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'>
        <span className='font-bold'>Hello, I&apos;m Chandra Prakash.</span>{' '}
        I&apos;m a <span className='font-bold'>full-stack developer</span>. I
        enjoy building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>MERN stack and (Next.js)</span>.
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium'>
        <Link
          href='#contact'
          className='group bg-[#144552] text-white px-7 py-3 flex items-center gap-2 rounded-xl outline-none focus:scale-105 hover:scale-105 hover:bg-[#006466] active:scale-100 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <Link
          className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-xl outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack '
          href='/CV.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </Link>
        <div className='flex space-x-5'>
          <Link
            className='bg-white p-4 text-gray-700 hover:text-[#0077B5] flex items-center gap-2 rounded-xl focus:scale-[1.10] hover:scale-[1.10] active:scale-105 transition cursor-pointer borderBlack '
            href='https://www.linkedin.com/in/chandraprakash1104/'
            target='_blank'
          >
            <BsLinkedin />
          </Link>

          <Link
            className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-xl focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack '
            href='https://github.com/ChandraPrakash1104'
            target='_blank'
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
