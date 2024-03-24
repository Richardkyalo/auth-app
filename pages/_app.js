// pages/_app.js

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import '../styles/globals.css'; // Import global styles if needed

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      once: true, // Whether animation should only happen once - while scrolling down
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
