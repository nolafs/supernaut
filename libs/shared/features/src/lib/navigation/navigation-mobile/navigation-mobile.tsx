'use client';
/* eslint-disable-next-line */
import styles from './navigation-mobile.module.scss';
import { TNavigationItem } from '@supernaut/types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@supernaut/hooks';
import Link from 'next/link';
import cn from 'classnames';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import NavigationMobileMenu from './navigation-mobile-menu';

gsap.registerPlugin(useGSAP, SplitText);

export interface NavigationMobileProps {
  siteTitle?: string;
  logo?: string;
  mode: 'light' | 'dark';
  items: TNavigationItem[];
}

export function NavigationMobile({
  items,
  mode,
  logo,
  siteTitle,
}: NavigationMobileProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState({ pathname: '' });
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
  };

  return (
    <>
      <div className={cn('fixed z-50 right-0 top-0', styles['menuButton'])}>
        <button
          className={cn(
            'relative px-6 py-6 flex flex-col space-y-3 cursor-pointer bg-transparent pointer-events-auto z-20'
          )}
          onClick={handleClick}
        >
          <div className={cn(styles[mode], mobileMenuOpen ? styles['open'] : styles['close'])}></div>
        </button>
      </div>

      <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog className="relative z-[45]" onClose={setMobileMenuOpen}>
            <div className="fixed inset-0"/>

            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-base/40 bg-opacity-75 transition-opacity"/>
            </Transition.Child>


            <div className="fixed inset-0  overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                      <Dialog.Panel className="pointer-events-none w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                          <div className={'pt-20 px-5'}>
                            <nav className={'pointer-events-auto'}>
                              <NavigationMobileMenu items={items} open={mobileMenuOpen} />
                            </nav>
                          </div>
                        </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
      </Transition.Root>
    </>
  );
}

export default NavigationMobile;
