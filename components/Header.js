import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials';

import { HiStar } from 'react-icons/hi2';

const Header = () => {
  return (
    <header className='absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-5 py-8'>
          {/* logo */}
          <Link href={'/'} className='flex items-center'> 
          <Image src={'/anthony.svg'} width={60} height={60} alt='' priority={true} className='mt-3 mr-2 xl:mr-3 xl:mt-20 xl:h-[90px] xl:w-[90px] flex'/>
            <div className='flex flex-col'><h1 className='mt-3 text-2xl xl:text-4xl font-bold xl:mt-20'>Anthony</h1>
            <h2 className='-mt-2 xl:text-[20px] font-bold'>Oppus</h2>
            </div>
            <HiStar className='-mt-3 ml-2 xl:text-2xl  xl:mt-[50px] animate-spin-slow hover:animate-spin hover:text-accent transition-all duration-300'/>
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
