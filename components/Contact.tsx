'use client';

import toast from 'react-hot-toast';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/hooks/useSectionInView';
import SectionHeading from './SectionHeading';
import { sendEmail } from '@/actions/emailAction';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='-mt-4 text-white/80'>
        Please contact me directly at{' '}
        <a
          className='underline text-[#76ABAE]'
          href='mailto:chandraprakash1104@gmail.com'
        >
          chandraprakash1104@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg bg-[#76ABAE] bg-opacity-15 focus:bg-opacity-25 transition-all outline-none placeholder-gray-100/50 text-gray-100'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 p-4 rounded-lg bg-[#76ABAE] bg-opacity-15 focus:bg-opacity-25 transition-all outline-none placeholder-gray-100/50 text-gray-100'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </section>
  );
}

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-lg outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-[#13232C]/80 active:scale-100 bg-[#0E1C26]/80 disabled:scale-100 disabled:bg-opacity-65'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-xl border-b-2 border-white'></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
        </>
      )}
    </button>
  );
}
