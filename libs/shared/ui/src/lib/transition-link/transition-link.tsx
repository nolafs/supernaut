'use client'
import {ReactNode} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import cn from 'classnames';
import Link from 'next/link';
import {useStore} from '@supernaut/utils';
import {saveScrollPosition} from '../../../../features/src/lib/page-transition/page-transition';


/* eslint-disable-next-line */
export interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function TransitionLink({children, href, className}: TransitionLinkProps) {

  const {isTransitionActive, setRoutingPageOffset} = useStore()
  const pathname = usePathname()

  const handleClick = (e:any) => {
    if (isTransitionActive) e.preventDefault()
    saveScrollPosition(pathname, setRoutingPageOffset)
  };

  return (
    <Link className={cn('transition-link', className)} href={{pathname: href}} onClick={handleClick} >
      {children}
    </Link>
  );
}

export default TransitionLink;
