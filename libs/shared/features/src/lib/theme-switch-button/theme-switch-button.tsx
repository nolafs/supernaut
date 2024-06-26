/* eslint-disable-next-line */
'use client';
import {useTheme} from '@supernaut/context';
import {MoonIcon, SunIcon} from '@heroicons/react/16/solid';



export function ThemeSwitchButton() {

  const {theme, setInitialTheme} = useTheme();

  return (
    <button onClick={() => setInitialTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'light' && <SunIcon className={'h-6 w-6'}/> }
      {theme === 'dark' && <MoonIcon className={'h-6 w-6'}/> }
    </button>
  );
}

export default ThemeSwitchButton;
