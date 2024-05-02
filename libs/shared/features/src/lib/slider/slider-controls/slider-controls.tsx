'use client';
import styles from './slider-controls.module.scss';
import {ReactNode, useEffect} from 'react';
import {useMousePosition} from '@supernaut/hooks';


/* eslint-disable-next-line */
export interface SliderControlsProps {
  children: ReactNode;
}

export function SliderControls({children}: SliderControlsProps) {

  const {clientX, clientY} = useMousePosition();


  useEffect(() => {



    }, []);


  return (
    <div className={styles['container']}>
      {children}
      <div className={'pointer-events-none'}>
        <svg
          width="157"
          height="158"
          viewBox="0 0 157 158"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: clientX,
            top: clientY,
            zIndex: 1000,
            transform: "translate(-50%, -50%)",
          }}
        >
          <path
            d="M120.617 36.28h-70.36v8.883h55.634l-73.633 73.632 6.078 6.078 73.632-73.633.234 55.634h8.883v-70.36l-.35-.351z"
            fill="#FFF" fillRule="nonzero"/>
        </svg>
      </div>
    </div>
  );
}

export default SliderControls;
