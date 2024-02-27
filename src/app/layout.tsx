import React from 'react';
import './global.css';
import { AppNavBar } from '@/components/navigation';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
});

const druk = localFont({
  src: '../lib/fonts/Druk/Druk Wide-Super-Web.woff2',
  display: 'swap',
  variable: '--font-druk',
});

const gilroy = localFont({
  src: '../lib/fonts/Gilroy/GilroyExtraBold/font.woff2',
  display: 'swap',
  variable: '--font-gilroy',
});
export const metadata: Metadata = {
  // viewport: { width: 'device-width', initialScale: 1 },
  title: {
    default: 'Trapcard',
    template: '%s | Trapcard',
  },
  description:
    'Experience the future of music streaming with Web2.5 - where transparent blockchain transactions empower artists and reward listeners. Dive into a world of fair compensation, exclusive perks, and seamless crypto payments. Join the revolution and amplify your music journey today!',
  keywords:
    'Crypto Beats, Blockchain Harmony, Decentralized Soundwaves, Crypto Grooves, FairPlay Music, Artist Empowerment Hub, Transparent Tunescapes, CryptoTunes Revolution, Peer-to-Peer Melodies, Web2.5 Sonic Experience, CryptoSounds Hub, Seamless Rhythms, EmpowerArt Beats, EmpowerArt Beats, Digital Audio Freedom, CryptoWave Jams, Harmony in Blockchain, EmpowerArt Beats, NxtLevel Music Stream Decentralized Vibes, FairNotes Streaming, Web2.5, Trapcard, Traptokens, Trap',
  twitter: {
    title: 'Trapcard',
    card: 'summary_large_image',
    description:
      'Experience the future of music streaming with Web2.5 - where transparent blockchain transactions empower artists and reward listeners. Dive into a world of fair compensation, exclusive perks, and seamless crypto payments. Join the revolution and amplify your music journey today!',
    site: '@Trapcard',
    creator: '@Trapcard',
    images:
      '/images/home/base_d.jpg',
  },
  openGraph: {
    type: 'website',
    url: 'https://trapcard.app',
    title: 'Trapcard',
    description:
      'Experience the future of music streaming with Web2.5 - where transparent blockchain transactions empower artists and reward listeners. Dive into a world of fair compensation, exclusive perks, and seamless crypto payments. Join the revolution and amplify your music journey today!',
    siteName: 'Trapcard',
    images: [
      {
        url: '/images/home/base_d.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${druk.variable} ${gilroy.variable} ${mont.className}`}
    >
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='md:fixed inset-x-0 top-0 z-50'>
        <AppNavBar />
      </header>
      <main>{children}</main>
      <footer className='md:px-40 px-5 flex justify-between text-sm py-5 md:fixed bottom-0 w-full bg-white'>
        <p>© {new Date().getFullYear()} Trapcard</p>
        <div className='flex gap-x-4'>
        <Link href={'/docs'} className='text-blue-600 hover:text-blue-500'>
          Docs
        </Link>
        <Link href={'/aboutus'} className='text-blue-600 hover:text-blue-500'>
          About-us
        </Link>
        {/* <Link href={'/privacy'} className='text-blue-500 hover:text-blue-600'>
          Privacy Policy
        </Link> */}
        </div>
      </footer>
    </>
  );
}
