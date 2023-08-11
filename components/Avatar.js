// next image
import Image from 'next/image';
import Link from 'next/link';

const Avatar = () => {
  return (
    <div className='hidden relative xl:flex xl:max-w-none'>
      <Image src={'/headofficer.png'} width={737} height={678} alt='main' className='translate-z-0 hover:scale-105 duration-500'/>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/hazco-icon.png'} width={60} height={60} alt='Hazong' className='absolute top-40 left-40 rounded-full border-8 hover:animate-bounce '/>
      </Link>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/bisu-icon.png'} width={80} height={80} alt='BISU' className='absolute top-80 left-10 rounded-full border-8 hover:animate-bounce '/>
      </Link>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/bisu-icon.png'} width={50} height={50} alt='DES' className='absolute bottom-40 right-[160px] rounded-full border-8 hover:animate-bounce '/>
      </Link>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
      <Image src={'/bisu-icon.png'} width={70} height={70} alt='BNHS' className='absolute bottom-80 right-40  rounded-full border-8 hover:animate-bounce '/>
      </Link>
    </div>
  );
};

export default Avatar;
