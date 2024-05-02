import React, {createContext, useState, useContext, Dispatch, SetStateAction} from "react";

interface CursorContextProps {
  children: React.ReactNode;
}

type Cursor = {
  active: boolean;
  type: string;
};

type CursorContextValue = {
  cursor: Cursor;
  setCursor: Dispatch<SetStateAction<Cursor>>;
};

export const CursorContext = createContext<CursorContextValue | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorContextProvider");
  }
  return context;
};

export const CursorContextProvider = ({children}: CursorContextProps) => {
  const [cursor, setCursor] = useState<Cursor>({
    active: false,
    type: "default",
  });

  const setCursorCallback: CursorContextValue['setCursor'] = (newCursor) => {
    setCursor(prevCursor => ({...prevCursor, ...newCursor}));
  };

  const contextValue: CursorContextValue = {cursor, setCursor: setCursorCallback};

  return (
    <CursorContext.Provider value={contextValue}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
