import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface SkillIconProps {
  src: string;
  name: string;
}

const SkillIcon = ({ src, name }: SkillIconProps) => {
  return (
    <div
      className='flex items-center justify-center transition-all duration-300 z-10 relative group'
      data-tooltip-content={name}
      data-tooltip-id='tool-tooltip'
    >
      <Image src={src} alt={name} width={40} height={40} className='z-10' />
      <Image
        src={src}
        alt={name}
        width={50}
        height={50}
        className='absolute blur-[1.5rem] opacity-50 group-hover:opacity-100 transition-all duration-200 '
      />
      <Tooltip
        id='tool-tooltip'
        place='bottom'
        style={{
          fontSize: '10px',
          color: '#76ABAE',
          fontWeight: 'bold',
          maxWidth: '200px',
          maxHeight: '2rem',
          backgroundColor: '#222831',
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </div>
  );
};

export default SkillIcon;
