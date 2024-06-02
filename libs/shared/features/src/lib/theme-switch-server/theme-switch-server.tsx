'use client';
/* eslint-disable-next-line */
import {useEffect} from 'react';
import {useTheme} from '@supernaut/context';

export interface ThemeSwitchServerProps {
  mode: 'light' | 'dark'  | undefined | null | string;
}

export function ThemeSwitchServer({mode}: ThemeSwitchServerProps) {

  const {theme, setInitialTheme} = useTheme();

  useEffect(() => {
    console.log('ThemeSwitchServer', mode, theme)
    if(mode === theme) {
      return;
    }
    setInitialTheme(mode);
  }, []);

  return null;
}

export default ThemeSwitchServer;
