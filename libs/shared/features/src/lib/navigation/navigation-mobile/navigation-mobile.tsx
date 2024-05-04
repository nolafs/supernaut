'use client';
/* eslint-disable-next-line */
import styles from './navigation-mobile.module.scss';
import {NavigationItem} from '@supernaut/types';
import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useEffect, useRef, useState} from 'react';
import {useNavigation} from '@supernaut/hooks';
import Link from 'next/link';
import cn from 'classnames';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {SplitText} from 'gsap/SplitText';
import NavigationMobileMenu from './navigation-mobile-menu';

gsap.registerPlugin(useGSAP, SplitText);

export interface NavigationMobileProps {
  siteTitle?: string;
  logo?: string;
  mode: 'light' | 'dark';
  items: NavigationItem[];
}

export function NavigationMobile({items, mode, logo, siteTitle}: NavigationMobileProps) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState({pathname: ''});
  const route = useNavigation({});







  useEffect(() => {
    if (route?.route.pathname !== currentRoute.pathname) {
      setCurrentRoute({
        pathname: route.route.pathname,

      });

      setMobileMenuOpen(false);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
    }

  }, [route, currentRoute.pathname]);

  const handleClick = () => {
    setMobileMenuOpen((prev) => !prev);
  }

  return (<>

      <div className={cn(styles['menuButton'], (mobileMenuOpen) ? styles['open'] : styles['close'],'relative flex flex-col space-y-3 cursor-pointer bg-transparent z-90')} onClick={handleClick}>
        <div className={cn('w-12 h-1', (mode == 'light') ? 'bg-base' : 'bg-primary', (mobileMenuOpen) && 'bg-base', styles['menuBarTop'])}></div>
        <div className={cn('w-12 h-1', (mode == 'light') ? 'bg-base' : 'bg-primary', (mobileMenuOpen) && 'bg-base', styles['menuBarBottom'])}></div>
      </div>

      <Transition
        show={mobileMenuOpen}
        enter="transition duration-500 ease-out"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition duration-500 ease-out"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
        as={Fragment}
      >
        <Dialog as="div"
                className="fixed top-20 w-full h-screen inset-0 z-10 overflow-y-auto lg:hidden"
                onClose={setMobileMenuOpen}>
          <Dialog.Panel>
            <div className="relative w-full h-screen flex justify-end">
              <div className={'flex justify-end w-full'}>
                <nav className="flex flex-col bg-primary w-[80%] h-screen p-10">
                  <NavigationMobileMenu items={items} open={mobileMenuOpen} />
                </nav>
              </div>
            </div>

          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
}

export default NavigationMobile;
