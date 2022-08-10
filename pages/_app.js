import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';
import 'react-slideshow-image/dist/styles.css';
import './index.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
