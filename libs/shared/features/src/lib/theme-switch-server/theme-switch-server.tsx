'use client';
/* eslint-disable-next-line */
import {useEffect, useRef} from 'react';
import {useTheme} from '@supernaut/context';


export interface ThemeSwitchServerProps {
  mode: 'light' | 'dark'  | undefined | null | string;
}

export function ThemeSwitchServer({mode}: ThemeSwitchServerProps) {

  const {theme, setInitialTheme} = useTheme();
  const didMountRef = useRef(false);

  useEffect(() => {
    console.log('ThemeSwitchServer', mode, theme)
    setInitialTheme(mode);
    /*
    if (didMountRef.current) {
      console.log('ThemeSwitchServer Mounted', mode, theme)
      if (mode === theme) {
        return;
      }
      setInitialTheme(mode);
    } else {
      didMountRef.current = true;
    }

     */
  }, [mode]);
  return null;
}

export default ThemeSwitchServer;
