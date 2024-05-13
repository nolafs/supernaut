'use client';
/* eslint-disable-next-line */
import {ButtonPrimary} from '@supernaut/shared-ui';
import {useModalAction, useModalState} from '../modal-view/hooks';


export interface ContactFormDialogButtonProps {
  label?: string;
}

export function ContactFormDialogButton({label}: ContactFormDialogButtonProps) {
  //const {view, isOpen} = useModalState();
  const {openModal} = useModalAction();

  return (
    <ButtonPrimary
      onClick={() => openModal('CONTACT')}
      label={label}
      size={'lg'}
    />
  );
}

export default ContactFormDialogButton;
