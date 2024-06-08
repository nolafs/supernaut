'use client';
/* eslint-disable-next-line */
import styles from './navigation-mobile.module.scss';
import { TNavigationItem } from '@supernaut/types';
import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react';
import { Fragment, useState } from 'react';
import cn from 'classnames';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import NavigationMobileMenu from './navigation-mobile-menu';
import SocialList from '../../social-list/social-list';
import ContactFormDialogButton from '../../contact-form/contact-form-dialog-button';

gsap.registerPlugin(useGSAP, SplitText);

export interface NavigationMobileProps {
  items: TNavigationItem[];
  social?: any;
  contactFormDialog: any;
}

export function NavigationMobile({
  items,
  social,
  contactFormDialog
}: NavigationMobileProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const handleClick = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className={cn('fixed z-50 right-0 top-0 h-[80px] md:h-[100px] flex items-center', mobileMenuOpen ? '' : 'switch-difference' ,styles['menuButton'])}>
        <button
          aria-label="Open/close Menu"
          className={cn(
            'relative px-6 flex flex-col space-y-3 cursor-pointer bg-transparent pointer-events-auto z-20'
          )}
          onClick={handleClick}
        >
          <div className={cn( mobileMenuOpen ? styles['open'] : styles['close'])}></div>
        </button>
      </div>

      <Transition show={mobileMenuOpen} as={Fragment}>
          <Dialog className="relative z-[45]"  onClose={setMobileMenuOpen}>
            <div className="fixed inset-0"/>

            <TransitionChild
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-neutral/40 bg-opacity-75 transition-opacity"/>
            </TransitionChild>


            <div className="fixed inset-0  overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-20">
                  <TransitionChild
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                      <DialogPanel className="pointer-events-none w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">

                            <nav className={'h-full'}>
                              <div className={'flex flex-col justify-items-stretch items-stretch h-full'}>
                                <div className={'pt-24 px-5  grow'}>
                                  <NavigationMobileMenu items={items} open={mobileMenuOpen}/>
                                </div>
                                <div className={'bg-neutral shrink p-3 flex flex-row justify-center pointer-events-auto'}>
                                  <SocialList items={social}/>
                                  {(contactFormDialog) && <ContactFormDialogButton label='Contact' isIcon={true}/>}
                                </div>
                              </div>
                            </nav>

                        </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </div>
          </Dialog>
      </Transition>
    </>
  );
}

export default NavigationMobile;
