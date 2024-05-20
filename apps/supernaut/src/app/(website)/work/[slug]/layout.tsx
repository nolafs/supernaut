import {ReactNode} from 'react';

interface LayoutProps {
  children: ReactNode;
  latest: ReactNode;
}

export default async function Layout({children, latest}: LayoutProps) {
  return (
    <>
      {children}
      {latest}
    </>
  );
}
