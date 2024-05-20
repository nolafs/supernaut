'use client'

import {ReactNode, useEffect, useRef} from 'react';
import {animatePageIn} from '@supernaut/utils';



export default function Template({children}: {children: ReactNode}) {


  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    animatePageIn();
  }, []);


  const createDiv = () => {
    const container = ref.current;
    const numberOfDivs = 20; // Change this to the number of divs you want
    const totalHeight = 100;

    for (let i = 1; i <= numberOfDivs; i++) {
      const childDiv = document.createElement('div');
      childDiv.className = 'bar bg-primary';
      childDiv.style.height = `${(totalHeight / numberOfDivs) * i}%`;
      container?.appendChild(childDiv);
    }
  }

  return (
    <>
      <div ref={ref} id={'page-transition'} className={'fixed z-[39] w-full h-screen top-0 inset-0 pointer-events-none overflow-hidden'}>
          <div className={'bar w-full bg-primary'} style={{height:'5%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'6%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'12%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'21%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'27%'}}></div>
          <div className={'bar w-full bg-primary'} style={{height:'41%'}}></div>
      </div>
      <div id={'content-main'}>
        {children}
      </div>
    </>
  );

}
