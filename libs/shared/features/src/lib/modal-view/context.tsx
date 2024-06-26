'use client';
import React, {createContext, ReactNode, Suspense, useReducer} from 'react';

export type MODAL_VIEWS =
    | 'CONTACT'

interface State {
  view: MODAL_VIEWS | undefined;
  data?: any;
  isOpen: boolean;
}

type Action =
    | { type: 'open'; view: MODAL_VIEWS; payload?: any }
    | { type: 'close' };

const initialState: State = {
  view: undefined,
  isOpen: false,
  data: null,
};

function modalReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true,
      };
    case 'close':
      return {
        ...state,
        //view: undefined,
        data: null,
        isOpen: false,
      };
    default:
      throw new Error('Unknown Modal Action!');
  }
}

export const ModalStateContext = createContext<State>(initialState);
ModalStateContext.displayName = 'ModalStateContext';

export const ModalActionContext = createContext<
    React.Dispatch<Action> | undefined
>(undefined);
ModalActionContext.displayName = 'ModalActionContext';

export function ModalProvider({children}: { children: ReactNode }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  return (
        <ModalStateContext.Provider value={state}>
          <ModalActionContext.Provider value={dispatch}>
            {children}
          </ModalActionContext.Provider>
        </ModalStateContext.Provider>
  );
}
