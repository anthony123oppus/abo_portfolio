// next image
import Image from 'next/image';
import Link from 'next/link';

import ParticlesContainer from '../components/ParticlesContainer';

const Avatar = () => {
  return (
    <div className='hidden relative xl:flex xl:max-w-none'>
      <ParticlesContainer />
      <Image src={'/headofficer.png'} width={737} height={678} alt='' className='translate-z-0 hover:scale-105 duration-500'/>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/hazco-icon.png'} width={60} height={60} alt='Hazong' className='absolute bottom-40 right-[200px] rounded-full border-8 hover:animate-bounce '/>
      </Link>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/bisu-icon.png'} width={70} height={70} alt='BISU' className='absolute bottom-80 right-[220px] rounded-full border-8 hover:animate-bounce '/>
      </Link>
    </div>
  );
};

export default Avatar;
