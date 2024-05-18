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
      <span  className={'inline-block fill-primary :hover:fill-secondary w-6 h-6 ml-5 pt-[1px] cursor-pointer'}
            onClick={() => openModal('CONTACT')}>
        <span className={'sr-only'}>{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M32 159.2l224 154 224-154V96H32v63.2zM480 198L256 352 32 198V416H480V198zM0 416V176 96 64H32 480h32V96v80V416v32H480 32 0V416z"/></svg>
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
