'use client';
/* eslint-disable-next-line */
import React, {createContext, useContext, useState, ReactNode, useEffect, useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
// eslint-disable-next-line @nx/enforce-module-boundaries
import useIsFirstRender from '../../../hooks/src/lib/is-first-render';

type Theme = 'light' | 'dark' | undefined | null | string

interface ThemeContextType {
  theme: Theme;
  setInitialTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [prevTheme, setPrevTheme] = useState<Theme>('dark');
  const ref = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const isFirstRender = useIsFirstRender();



  useEffect(() => {

    console.log('THEME', theme, prevTheme, isFirstRender)

    if (isFirstRender) {
      console.log('FIRST RENDER', theme)
      document.querySelector("html")?.setAttribute("data-theme", `first-${theme}`);
      setPrevTheme(theme);
      return;
    }

    if (theme === prevTheme) {
      return;
    }

    if (!tl.current) {
      return
    }

    console.log('TOGGLE THEME', theme)

    document.querySelector("html")?.setAttribute("data-theme-switch", 'active');

    //check if timeline is at end
    if (theme === 'light' && prevTheme === 'dark') {

      console.log('PLAY')
      tl.current.play(0).then(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme);
        document.querySelector("html")?.setAttribute("data-theme-switch", 'inactive');

      });
    }

    if (theme === 'dark' && prevTheme === 'light') {
      console.log('REVERSE')
      tl.current.reverse().then(() => {
        document.querySelector("html")?.setAttribute("data-theme", theme);
        document.querySelector("html")?.setAttribute("data-theme-switch", 'inactive');
      });
    }

    setPrevTheme(theme);

  }, [theme]);

  const setInitialTheme = (mode: Theme) => {
    if(!mode) {
      mode = 'dark';
    }
    if (mode === theme) {
      return;
    }
    setTheme(prevState => mode);
  }

  const createGrid = () => {

    if(!ref.current) {
      return;
    }

    const container = ref.current;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const squareSize = 200; // Base size of the square (width and height)

    const columns = Math.ceil(containerWidth / squareSize);
    const rows = Math.ceil(containerHeight / squareSize);

    const finalSquareSize = Math.min(
      containerWidth / columns,
      containerHeight / rows,
    );

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat( 1, ${window.innerWidth}px)`;
    container.style.gridTemplateRows = `repeat(${rows + 1}, ${finalSquareSize}px)`;

    container.innerHTML = ""; // Clear existing squares

    for (let i = 0; i < (((rows  + 1)) ); i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `${window.innerWidth}px`;
      square.style.height = `${finalSquareSize}px`;
      container.appendChild(square);
    }
  };

  useGSAP(() => {
    createGrid();
    const animation = () => {

      tl.current = gsap.timeline({paused: true});

      tl.current.set(ref.current, {autoAlpha: 1})
      tl.current.fromTo(
        ".square",
        {
          scaleY: 0,
          y: 500,
          backgroundColor:  '#fff'// 'var(--color-primary)',
        },
        {
          duration: 0.5,
          scaleY: 1.2,
          y: 0,

          backgroundColor: '#fff', // 'var(--color-primary)',
          borderRadius: "0",
          stagger: {
            from: "center",
            grid: "auto",
            axis: "y",
            amount: 0.2,
          },
        }
      );
      //tl.current.set(ref.current, {autoAlpha: 0})
    };

    animation();

    window.addEventListener("resize", () => {
      createGrid();
      animation();
    });

    return () => {
      window.removeEventListener("resize", () => {
        createGrid();
        animation();
      });
    };

  }, {dependencies: [], scope: ref});

  return (
    <ThemeContext.Provider value={{theme, setInitialTheme}}>
      <div className={'isolated'} >
        <div
          ref={ref}
          className="fixed z-2 top-0 left-0 w-full h-full grid pointer-events-none"
        ></div>
        <div className={'cl relative z-1'}>
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
