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
  const [theme, setTheme] = useState<Theme>('dark');
  const ref = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  let switchTheme: string | null = null;

  const toggleTheme = () => {
    console.log('TOGGLE THEME', theme)
    if(ref.current) {
      //gsap.set(ref.current, {autoAlpha: 0})
      document.querySelector("html")?.setAttribute("data-theme", theme || 'dark');


    }
  }

  const setInitialTheme = (mode: Theme) => {

    if(!mode) {
      mode = 'dark';
    }


    if (!tl.current) {
      return
    }

    switchTheme = mode;

    if(theme === mode) {
      return;
    }

    console.log('SET INITIAL THEME', switchTheme, mode)

    //check if timeline is at end
    if(mode === 'light' && theme === 'dark') {
      console.log('PLAY')
      tl.current.play(0);
    }

    if (mode === 'dark' && theme === 'light') {
      console.log('REVERSE')
      tl.current.reverse();
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

    const squareSize = 150; // Base size of the square (width and height)

    const columns = Math.floor(containerWidth / squareSize);
    const rows = Math.floor(containerHeight / squareSize);

    const finalSquareSize = Math.min(
      containerWidth / columns,
      containerHeight / rows,
    );

    container.style.gridTemplateColumns = `repeat(${columns}, ${finalSquareSize}px)`;
    container.style.gridTemplateRows = `repeat(${rows}, ${finalSquareSize}px)`;

    container.innerHTML = ""; // Clear existing squares

    for (let i = 0; i < ((columns * (rows+1)) ); i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = `${finalSquareSize}px`;
      square.style.height = `${finalSquareSize}px`;
      container.appendChild(square);
    }
  };

  useGSAP(() => {

    console.log('USE GSAP', theme)

    createGrid();

    const animation = () => {

      tl.current = gsap.timeline({paused: true});

      tl.current.set(ref.current, {autoAlpha: 1})
      tl.current.fromTo(
        ".square",
        {
          scaleY: 0,
          y: 500,
          backgroundColor: "#fff",
        },
        {
          duration: 0.5,
          scaleY: 1.2,
          y: 0,

          backgroundColor: "#fff",
          borderRadius: "0",
          stagger: {
            from: "center",
            grid: "auto",
            axis: "y",
            amount: 0.2,
          },
          onComplete: () => {
            console.log('COMPLETE', switchTheme)
            //toggleTheme();
          },
          onReverseComplete: () => {
            console.log('Reverse', switchTheme)
            //toggleTheme();
          }
        },
        "-=0.5",
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
    <ThemeContext.Provider value={{theme, toggleTheme, setInitialTheme}}>
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
