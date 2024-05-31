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
  const tl = useRef<gsap.core.Timeline | null>(null);

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



    console.log('SWITCH', theme);



    setTheme(prevTheme => {
      if(prevTheme !== theme){
        if (!tl.current) {
          return
        }
        if (theme === 'dark') {
          tl?.current.play();
        } else {
          (theme === 'light') && tl.current.reverse();
        }
      }
      return theme;
    });
    //localStorage.setItem('theme', theme);
    //document.querySelector("html")?.setAttribute("data-theme", theme);
  }

  const createGrid = () => {

    if(!ref.current) {
      return;
    }

    const container = ref.current;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const squareSize = 200; // Base size of the square (width and height)

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

    createGrid();

    const animation = () => {
      tl.current = gsap.timeline({paused: true});
      tl.current.fromTo(
        ".square",
        {
          scale: 1.2,
          backgroundColor: "#ffffff",
        },
        {
          duration: 0.5,
          scaleY: 0,
          y: 500,
          opacity: 1,
          backgroundColor: "#ffffff",
          borderRadius: "0",
          stagger: {
            from: "center",
            grid: "auto",
            axis: "y",
            amount: 0.2,
          },
        },
        "-=0.5",
      );
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

  }, {dependencies: [tl], scope: ref});

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
