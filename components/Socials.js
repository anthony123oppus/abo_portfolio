import Link from 'next/link';

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiPinterestFill,
} from 'react-icons/ri';

export const socialMedia = [
  {
    name: 'Youtube',
    path: 'https://www.youtube.com',
    icon: <RiYoutubeFill />,
  },
  {
    name: 'Instagram',
    path: 'https://www.instagram.com',
    icon: <RiInstagramFill />,
  },
  {
    name: 'Facebook',
    path: 'https://www.facebook.com',
    icon: <RiFacebookFill />,
  },
  {
    name: 'Linkedin',
    path: 'https://www.linkedin.com',
    icon: <RiLinkedinFill />,
  },
  {
    name: 'Dribbble',
    path: 'https://www.dribbble.com',
    icon: <RiTwitterFill />,
  },
  {
    name: 'Pinterest',
    path: 'https://www.pinterest.com',
    icon: <RiPinterestFill />,
  },
]

const Socials = () => {
  return (
    <div>
      <div className='relative -top-2 xl:bg-white xl:w-50 xl:h-[4px] xl:mt-[80px] rounded-xl group hover:bg-accent'></div>
      <div className='flex justify-center items-center gap-x-5 '>
        {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
          <RiTwitterFill />
        </Link> */}
        {socialMedia.map((link, index) => {
                return (
                      <Link 
                      className='bg-black/60 translate-z-0 hover:bg-transparent xl:p-1 rounded-[5px] border-2 group hover:text-accent hover:border-accent hover:scale-125 xl:hover:translate-y-3 transition-all duration-300' 
                        href={link.path} 
                        key={index}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <div>{link.icon}</div>
                        <div className='xl:opacity-0 xl:border-solid xl:border-b-accent xl:border-b-8 xl:border-x-transparent
                         xl:border-x-[5px] xl:border-t-0 xl:absolute xl:-top-[9px] xl:left-[7px] group-hover:opacity-[100%] group-hover:border-acccent transition-all duration-300'></div>
                      </Link>
                );
              })}
      </div>
   </div>
  );
};

export default Socials;
