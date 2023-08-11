// next image
import Image from 'next/image';
import Link from 'next/link';

import ParticlesContainer from '../components/ParticlesContainer';

const Avatar = () => {
  return (
    <div className='hidden relative xl:flex xl:max-w-none'>
      <ParticlesContainer />
      <Image src={'/headofficer.png'} width={737} height={678} alt='' className='translate-z-0 w-full h-full hover:scale-105 duration-500'/>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/hazco-icon.png'} width={60} height={60} alt='Hazong' className='absolute bottom-40 right-[200px] h-[60px] w-[60px] rounded-full border-8 hover:animate-bounce '/>
      </Link>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/bisu-icon.png'} width={60} height={60} alt='BISU' className='absolute bottom-80 right-[220px] h-[70px] w-[70px] rounded-full border-8 hover:animate-bounce '/>
      </Link>
    </div>
  );
};

export default Avatar;
