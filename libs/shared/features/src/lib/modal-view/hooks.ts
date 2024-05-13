'use client';
import {useContext} from 'react';
import {MODAL_VIEWS, ModalActionContext, ModalStateContext} from './context';

export function useModalState() {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return context;
}

export function useModalAction() {
  const dispatch = useContext(ModalActionContext);

  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`);
  }
  return {
    openModal(view: MODAL_VIEWS, payload?: unknown) {
      dispatch({type: 'open', view, payload});
    },
    closeModal() {
      dispatch({type: 'close'});
    },
  };
}
