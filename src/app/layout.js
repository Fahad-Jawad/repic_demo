import localFont from 'next/font/local';
import './globals.css';
import Providers from './Providers'; // Import the Providers wrapper
import Sidebar from "./Components/Sidebar";

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100 p-3 w-full flex`}
      >
        <Sidebar />
        <div className='w-3/4'>
        <Providers>{children}</Providers>
        </div>
        </body>
    </html>
  );
}
