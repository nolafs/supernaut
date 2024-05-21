'use client'
import {ReactNode} from 'react';
import {useRouter} from 'next/navigation';
import cn from 'classnames';


/* eslint-disable-next-line */
export interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function TransitionLink({children, href, className}: TransitionLinkProps) {

  const router = useRouter();

  const handleClick = () => {
    //animatePageOut(href, router);
    router.push(href);
  };

  return (
    <div className={cn('transition-link', className)} onClick={handleClick} >
      {children}
    </div>
  );
}

export default TransitionLink;
