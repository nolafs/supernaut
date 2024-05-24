'use client';
/* eslint-disable-next-line */
import React, {createContext, useContext, useState, ReactNode, useEffect, useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

type Theme = 'light' | 'dark' | undefined | null | string

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setInitialTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('light');
  const ref = useRef<HTMLDivElement>(null);


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log('newTheme', newTheme)
    //localStorage.setItem('theme', newTheme);
    //document.querySelector("html")?.setAttribute("data-theme", newTheme);
  };

  const setInitialTheme = (theme: Theme) => {
    if(!theme) {
      theme = 'dark';
    }
    setTheme(theme);
    //localStorage.setItem('theme', theme);
    //document.querySelector("html")?.setAttribute("data-theme", theme);
  }

  useGSAP(() => {
    console.log('ref', ref.current)
    /*
    const tl = gsap.timeline();

    tl.set(ref.current, {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    })

    tl.set('.ol', {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      autoAlpha: 1
    })

    tl.set('.cl', {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    })


    tl.set('.ol-t', {autoAlpha: 1})

    tl.fromTo('.ol-t',{yPercent: 100} ,{yPercent: 0, duration: 2, ease: 'power2.out'})
    tl.fromTo('.ol-t', {yPercent: 0}, {yPercent: -100, duration: 2, ease: 'power2.inOut', delay: 0.5})

    tl.set('.ol-t', {autoAlpha: 0})


    tl.set( '.ol', {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'visible',
      autoAlpha: 0
    })

    tl.set(ref.current, {
      width: '100%',
      height: '100%',
      overflow: 'visible',
    })

    tl.set('.cl', {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    })

     */



  }, {dependencies: [theme], scope: ref});

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, setInitialTheme}}>
      <div ref={ref} >
        <div className={'ol will-change-transform fixed z-50 top-0 left-0 w-full h-full hidden'}>
          <div className={'ol-t fixed w-full h-full bg-white top-full left-0'}></div>
        </div>
        <div className={'cl'}>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export {ThemeProvider, useTheme};
