import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Provider from '@/Provider';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chandra Prakash | Portfolio',
  description: 'Chandra Prakash is a full-stack developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Provider>
        <body
          className={`${inter.className} bg-black
        text-[#EAEFD3] relative
        `}
        >
          <div className='bg-[#212F45] absolute w-96 h-72 rounded-full sm:right-1/2 -top-5 blur-[6rem] md:h-96 md:w-[42rem] md:top-[-10rem] -z-10 md:blur-[10rem] md:right-1/3'></div>
          <Navbar />
          <Toaster
            toastOptions={{
              style: {
                color: 'white',
                paddingTop: '3px',
                paddingBottom: '3px',
                backgroundColor: 'rgba(55, 65, 81, 0.9)',
                border: '1px solid rgba(163, 163, 163, 0.3)',
              },
            }}
          />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
