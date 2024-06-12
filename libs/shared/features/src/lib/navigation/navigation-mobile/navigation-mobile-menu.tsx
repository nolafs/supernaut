/* eslint-disable-next-line */
'use client';
import { TNavigationItem } from '@supernaut/types';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import {usePathname} from 'next/navigation';
import cn from 'classnames';

export interface NavigationMobileMenuProps {
  items: TNavigationItem[];
  open: boolean;
  handleLinkClick?: (url: string) => void;
}

export function NavigationMobileMenu({
  items,
  open,
  handleLinkClick,
}: NavigationMobileMenuProps) {
  const menu = useRef<any>();
  const tl = useRef<any>();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  useGSAP(
    () => {
      tl.current = gsap.timeline();
      gsap.utils.toArray('.text').forEach((item: any, index: number) => {
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
    <ul ref={menu} className={' flex flex-col space-y-6 pointer-events-auto'}>
      {items.map((item: TNavigationItem, index) => {
        return (
          <li key={item.id} className={'menu-button overflow-hidden'}>
            {(item?.slug) && (
              <button

                onClick={(e) => handleLinkClick && handleLinkClick(`/${item.slug}`)}
                className={
                  cn('text-4xl outline-none uppercase border-0  focused:outline-none ', isActive(`/${item.slug}`) ? 'text-secondary' : 'text-secondary')
                }
              >
                <span className={'text text-neutral hover:text-secondary transition ease-in-out delay-150'}>{item.pageName}</span>
              </button>
            )}

            {(item?.url && !item?.slug) && (
              <a
                href={item.url}
                target="_blank"
                className={
                  cn('text-4xl outline-none uppercase border-0 focused:outline-none ', isActive(`/${item.slug}`) ? 'text-secondary' : 'text-secondary')
                } rel="noreferrer"
              >
                <span className={'text text-neutral hover:text-secondary transition ease-in-out  delay-150'}>{item.pageName}</span>
              </a>
            )}

          </li>
        );
      })}
    </ul>
  );
}

export default NavigationMobileMenu;
