/* eslint-disable-next-line */
'use client';
import { TNavigationItem } from '@supernaut/types';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import cn from 'classnames';

export interface NavigationMobileMenuProps {
  items: TNavigationItem[];
  open: boolean;
}

export function NavigationMobileMenu({
  items,
  open,
}: NavigationMobileMenuProps) {
  const menu = useRef<any>();
  const tl = useRef<any>();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  useGSAP(
    () => {
      console.log('setup animation');

      tl.current = gsap.timeline();
      gsap.utils.toArray('.label').forEach((item: any, index: number) => {
        const split = new SplitText(item, { type: 'chars, words' });
        tl.current.from(
          split.chars,
          {
            opacity: 0,
            y: '100%',
            duration: 0.5,
            stagger: 0.05,
            ease: 'power3.inOut',
          },
          0.2
        );
      });

      gsap.utils.toArray('.num').forEach((item: any, index: number) => {
        tl.current.from(
          item,
          { opacity: 0, duration: 0.5, ease: 'power3.inOut' },
          0.2
        );
      });
    },
    { dependencies: [items], scope: menu, revertOnUpdate: false }
  );

  useEffect(() => {
    if (open) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [open]);

  return (
    <ul ref={menu} className={' flex flex-col space-y-6'}>
      {items.map((item: TNavigationItem, index) => {
        return (
          <li key={item.id} className={'menu-button overflow-hidden'}>
            <Link
              href={{
                pathname: `/${item?.slug}`,
              }}
              className={
                cn('text-4xl outline-none  tracking-wider uppercase border-0 hover:text-secondary focused:outline-none transition ease-in-out  delay-150', isActive(`/${item.slug}`) ? 'text-secondary' : 'text-secondary')
              }
            >
              <span
                className={'num text-sm font-medium text-secondary mr-3 '}
              >{`0${index + 1}.`}</span>
              <span className={'label'}>{item.pageName}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationMobileMenu;
