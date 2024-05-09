import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   //your other metadata
// };

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
