import {ReactNode, Suspense} from 'react';
import {QueryProvider} from '@supernaut/contentful';

interface LayoutProps {
  children: ReactNode;
}


export default function Layout({children}: LayoutProps) {
  return (
      <QueryProvider>
        {children}
      </QueryProvider>
  );
}
