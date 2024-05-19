'use client';
/* eslint-disable-next-line */
import {useEffect} from 'react';
import {useTheme} from '@supernaut/context';

export interface ThemeSwitchServerProps {
  mode: 'light' | 'dark'  | undefined | null;
}

export function ThemeSwitchServer({mode}: ThemeSwitchServerProps) {

  const {theme, setInitialTheme} = useTheme();

  useEffect(() => {
    if (mode) {
      setInitialTheme(mode);
    } else {
      setInitialTheme('dark');
    }

  }, [mode, setInitialTheme]);

  return (
    <>
    </>
  );
}

export default ThemeSwitchServer;