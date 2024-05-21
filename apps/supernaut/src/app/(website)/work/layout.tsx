'use client';
import {ReactNode} from 'react';
import {QueryProvider} from '@supernaut/contentful';

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({children}: LayoutProps) {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  );
}
