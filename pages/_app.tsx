import type { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/globals.css';
import '../styles/Navbar.css';
import Navbarv2 from '../components/Navbar/Navbarv2';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='AppContainer'>
      {/* <Navbar /> */}
      <Navbarv2 />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
