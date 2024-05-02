'use client';
import styles from './slider-controls.module.scss';
import {ReactNode, useEffect} from 'react';
import {useMousePosition} from '@supernaut/hooks';
import {useCursor} from '@supernaut/context';


/* eslint-disable-next-line */
export interface SliderControlsProps {
  children: ReactNode;
}

export function SliderControls({children}: SliderControlsProps) {

  const {clientX, clientY} = useMousePosition();
  const {cursor, setCursor} = useCursor();


  useEffect(() => {

    console.log('cursor', cursor);

    }, [cursor]);

  const handleCursor = (type: string) => {
    setCursor({...cursor, active: true, type: type});
  }


  return (
    <div className={styles['container']}>
      {children}
      <div className={'controls'}>
        <div className={'swiper-button-next-custom absolute right-0 top-0 w-[20%] h-full bg-transparent z-20'}
             onMouseEnter={() => handleCursor('next')} onMouseLeave={() => handleCursor('default')}
        >
        </div>
        <div className={'swiper-button-prev-custom absolute left-0 top-0 w-[20%] h-full bg-transparent z-20'}
             onMouseEnter={() => handleCursor('prev')} onMouseLeave={() => handleCursor('default')}
        >
        </div>
      </div>
      {(cursor.active) &&
        <div className={'pointer-events-none text-primary text-6xl'}>
          {(cursor.type === 'default') &&
            <div style={{
              position: "absolute",
              left: clientX,
              top: clientY,
              zIndex: 1000,
              transform: "translate(-50%, -50%)",
            }}>
              <svg
                width="157"
                height="158"
                viewBox="0 0 157 158"
                xmlns="http://www.w3.org/2000/svg"

              >
                <path
                  d="M120.617 36.28h-70.36v8.883h55.634l-73.633 73.632 6.078 6.078 73.632-73.633.234 55.634h8.883v-70.36l-.35-.351z"
                  fill="#FFF" fillRule="nonzero"/>
              </svg>
            </div>
          }
          {(cursor.type === 'next') &&
            <div style={{
              position: "absolute",
              left: clientX,
              top: clientY,
              zIndex: 1000,
              transform: "translate(-50%, -50%)",
            }}>
              Next
            </div>
          }
          {(cursor.type === 'prev') &&
            <div style={{
              position: "absolute",
              left: clientX,
              top: clientY,
              zIndex: 1000,
              transform: "translate(-50%, -50%)",
            }}>
              Prev
            </div>
          }
        </div>
      }
    </div>
  );
}

export default SliderControls;
