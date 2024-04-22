import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from 'framer-motion';

interface SkillIconProps {
  src: string;
  name: string;
  delay: number;
}

const SkillIcon = ({ src, name, delay }: SkillIconProps) => {
  return (
    <div
      className='flex items-center justify-center transition-all duration-300 z-10 relative group'
      data-tooltip-content={name}
      data-tooltip-id='tool-tooltip'
    >
      <motion.img
        src={src}
        alt=''
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 1, scale: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: delay,
          x: { duration: 0.2 },
          scale: { duration: 0.4 },
        }}
      />

      <motion.img
        className='blur-md absolute -z-10 group-hover:opacity-90'
        src={src}
        alt=''
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        whileHover={{ opacity: 0.8 }}
        viewport={{
          once: true,
        }}
        transition={{ duration: 1, delay: delay }}
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
