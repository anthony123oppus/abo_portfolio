import '../styles/globals.css';


//components import
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Head from '../components/Head';

// router
import { useRouter } from 'next/router';

//framer motion
import {AnimatePresence, motion} from 'framer-motion';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
      <Layout>
      <Head />
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
  );     
}

export default MyApp;
