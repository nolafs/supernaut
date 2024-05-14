'use client';
/* eslint-disable-next-line */
import {ButtonPrimary} from '@supernaut/shared-ui';
import {useModalAction} from '../modal-view/hooks';
import React from 'react';


export interface ContactFormDialogButtonProps {
  label?: string;
  isIcon?: boolean;
}

export function ContactFormDialogButton({label,isIcon=false}: ContactFormDialogButtonProps) {
  const {openModal} = useModalAction();

  if(isIcon) {
    return (
      <span className={'inline-block fill-primary :hover:fill-secondary w-6 h-6 ml-5'}
            onClick={() => openModal('CONTACT')}>
        <span className={'sr-only'}>{label}</span>
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M48 150.8l208 143 208-143V112H48v38.8zM464 209L256 352 48 209V400H464V209zM0 400V176 112 64H48 464h48v48 64V400v48H464 48 0V400z"/></svg>
      </span>
    )
  }

  return (
    <ButtonPrimary
      onClick={() => openModal('CONTACT')}
      label={label}
      size={'lg'}
    />
  );
}

export default ContactFormDialogButton;
