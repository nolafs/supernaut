'use client';
/* eslint-disable-next-line */
import styles from './navigation-mobile.module.scss';
import {NavigationItem} from '@supernaut/types';
import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {useNavigation} from '@supernaut/hooks';
import Link from 'next/link';
import cn from 'classnames';

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

  const handleClick = () => {
    setMobileMenuOpen((prev) => !prev);
  }

  return (<>

      <div className={cn(styles['menuButton'], (mobileMenuOpen) ? styles['open'] : styles['close'],'relative flex flex-col space-y-3 cursor-pointer bg-transparent z-20')} onClick={handleClick}>
        <div className={cn('w-12 h-1', (mode == 'light') ? 'bg-base' : 'bg-primary', styles['menuBarTop'])}></div>
        <div className={cn('w-12 h-1', (mode == 'light') ? 'bg-base' : 'bg-primary', styles['menuBarBottom'])}></div>
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
                  <ul className={'flex flex-col space-y-6'}>
                    {items.map((item: NavigationItem, index) => {
                      return (
                        <li key={item.id}>
                          <Link href={{
                            pathname: item?.slug
                          }} className={'text-2xl tracking-wider uppercase border-0 hover:text-secondary focused:border-0 transition ease-in-out  delay-150'}><span className={'text-sm font-medium text-secondary mr-3 '}>{`0${index + 1}.`}</span>{item.pageName}</Link>
                        </li>
                      )
                    })}
                </ul>
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
