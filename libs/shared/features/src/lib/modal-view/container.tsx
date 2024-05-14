'use client'
import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';


import {
  MODAL_VIEWS,
} from './context';
import {useModalAction, useModalState} from './hooks';

const ContactDialog = dynamic(
  // eslint-disable-next-line @nx/enforce-module-boundaries
    () => import('@supernaut/features').then((mod) => mod.ContactForm),
);


function renderModalContent(view: MODAL_VIEWS) {
  switch (view) {
    case 'CONTACT':
      return <ContactDialog />;
    default:
      return null;
  }
}

export function ModalsContainer() {
  const {view, isOpen} = useModalState();
  const {closeModal} = useModalAction();


  return (<Transition show={isOpen} as={Fragment}

    >
      <Dialog className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral bg-opacity-50 z-50 transition-opacity"/>
        </TransitionChild>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                className="relative transform overflow-hidden  border-2 border-white bg-neutral px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center bg-white  cursor-pointer"
                       onClick={closeModal}>
                    <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true"/>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="mt-2">
                      {view && renderModalContent(view)}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>);
}

export default ModalsContainer;
