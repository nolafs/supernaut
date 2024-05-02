import './global.scss';
import {GeistSans} from 'geist/font/sans'
import {GeistMono} from 'geist/font/mono'
import {ReactNode} from 'react';
import cn from 'classnames';

export const metadata = {
  title: 'Welcome to Supernaut',
  description: 'Generated by create-nx-workspace',
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={cn(`${GeistSans.variable} ${GeistMono.variable}`, 'dark')}>
      <body>{children}</body>
    </html>
  );
}
