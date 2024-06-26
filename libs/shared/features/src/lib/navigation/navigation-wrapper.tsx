'use client'
/* eslint-disable-next-line */
import { ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './navigation.module.scss';
import { useScroll } from '@supernaut/hooks';

export interface NavigationWrapperProps {
  children: ReactNode;
  sticky: boolean;
  mode?: 'light' | 'dark';
}

export function NavigationWrapper({
  children,
  sticky = true,
  mode,
}: NavigationWrapperProps) {
  const scroll = useScroll();
  const [state, setState] = useState(false);

  useEffect(() => {
    if (scroll > 50) {
      setState(true);
    } else {
      setState(false);
    }
  }, [scroll]);

  return (
    <div id={'navigation'}
      className={cn(
        sticky ? 'fixed' : 'absolute',
        'w-full h-[80px]  md:h-[100px] inset-0 z-40 overflow-hidden flex items-center',
        (mode) && styles[mode],
        state ? styles['scrolled'] : '',
        state ? '': 'switch-difference'
      )}
    >
      {children}
    </div>
  );
}

export default NavigationWrapper;
