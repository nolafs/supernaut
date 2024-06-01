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
    setInitialTheme(mode);

  }, [mode, setInitialTheme]);

  return null;
}

export default ThemeSwitchServer;
