import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Apex Performance | Elite Athletic Engineering Platform',
  description: 'Train, evaluate, and perform with Apex, the elite athletic engineering platform offering personal training, group classes, and premium facilities.',
  keywords: ['gym', 'fitness', 'athletic engineering', 'personal training', 'group classes', 'powerlifting', 'HIIT'],
  authors: [{ name: 'Apex Gym' }],
  openGraph: {
    title: 'Apex Performance | Elite Athletic Engineering Platform',
    description: 'Train, evaluate, and perform with Apex, the elite athletic engineering platform offering personal training, group classes, and premium facilities.',
    url: 'https://apexgym.com',
    siteName: 'Apex Performance',
    images: [
      {
        url: 'https://picsum.photos/seed/gymworkout/1200/630',
        width: 1200,
        height: 630,
        alt: 'Apex Gym Facility',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Performance | Elite Athletic Engineering Platform',
    description: 'Train, evaluate, and perform with Apex, the elite athletic engineering platform.',
    images: ['https://picsum.photos/seed/gymworkout/1200/630'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white selection:bg-blue-500/30" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
