'use client';
import { activeSectionState, timeOfLastClickState } from '@/store/activeState';
import { links } from '@/lib/data';
import Link from 'next/link';
import { useRecoilState, useSetRecoilState } from 'recoil';

const Navbar = () => {
  const [activeSection, setActiveSection] = useRecoilState(activeSectionState);
  const setTimeOfLastClick = useSetRecoilState(timeOfLastClickState);

  return (
    <header className='z-[99] relative w-full'>
      <div className='fixed flex justify-center top-0 min-h-[3.6rem] w-full rounded-none shadow-lg shadow-[#006466]/[0.3] bg-[#13232C] bg-opacity-30 backdrop-blur-[0.5rem] sm:h-[3.25rem]'>
        <nav className='flex sm:fixed top-[0.15rem] sm:left-1/2 h-12 sm:-translate-x-1/2 py-2'>
          <ul className='flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {links.map((link) => (
              <li
                className='h-3/4 flex items-center justify-center relative'
                key={link.hash}
              >
                <Link
                  className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-100 transition ${
                    activeSection === link.name
                      ? 'text-gray-100'
                      : 'text-gray-400'
                  }`}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
