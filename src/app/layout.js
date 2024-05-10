import { Outfit } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../../components/Home/Footer';
import Head from 'next/head';

const inter = Outfit({
  subsets: ['latin-ext'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  manifest: '/manifest.json',
  title: 'Flaer Internal Tool',
  description: 'Application for managing internal stuff.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='manifest' href='/manifest.json'></link>
      </Head>
      <body className={`${inter.className} text-gray-800`}>
        <ToastContainer />

        {children}

        <Footer />
      </body>
    </html>
  );
}
