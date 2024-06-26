'use client';
import styles from './slider-controls.module.scss';
import { ReactNode, useEffect, useRef, useState } from 'react';
import {useMousePosition, useIsTouchDevice, useScrollDetection} from '@supernaut/hooks';
import { useCursor } from '@supernaut/context';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface SliderControlsProps {
  children: ReactNode;
  numberSlides: number;
  currentIndex: number;
}

export function SliderControls({ children, currentIndex, numberSlides }: SliderControlsProps) {
  const { clientX, clientY } = useMousePosition();
  const { cursor, setCursor } = useCursor();
  const { touch } = useIsTouchDevice();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useScrollDetection(
    () => {
      setIsVisible(false);
    },
    () => {
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (touch) {
      setCursor({ active: false, type: 'default' });
      setIsVisible(false);
      return;
    }

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    ref.current.addEventListener('mouseenter', handleMouseEnter);
    ref.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ref.current?.removeEventListener('mouseenter', handleMouseEnter);
      ref.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursor]);


  const handleCursor = (type: string) => {
    setCursor({ ...cursor, active: true, type: type });
  };

  return (
    <>
      <div
        ref={ref}
        className={cn(
          '',
          styles['container'],

        )}
      >
        {children}
        <div className={'controls'}>
          <div
            className={
              'swiper-button-next-custom absolute right-0 top-0 w-[10%] h-full bg-transparent z-20'
            }
            onMouseEnter={() => handleCursor('next')}
            onMouseLeave={() => handleCursor('default')}
          ></div>
          <div
            className={
              'swiper-button-prev-custom absolute left-0 top-0 w-[10%] h-full bg-transparent z-20'
            }
            onMouseEnter={() => handleCursor('prev')}
            onMouseLeave={() => handleCursor('default')}
          ></div>
        </div>
      </div>
      {cursor.active && (
        <div
          className={cn(
            'pointer-events-none text-primary text-6xl hidden  lg:block',
          )
          }
        >
          {cursor.type === 'default' && (
            <div
              style={{
                position: 'absolute',
                left: clientX,
                top: clientY,
                zIndex: 1000,
                transform: 'translate(-75%, -30px)',
                opacity: isVisible && clientX > 1 ? 1 : 0,
              }}
            >
              <svg
                width="157"
                height="158"
                viewBox="0 0 157 158"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120.617 36.28h-70.36v8.883h55.634l-73.633 73.632 6.078 6.078 73.632-73.633.234 55.634h8.883v-70.36l-.35-.351z"
                  fill="#FFF"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          )}
          {cursor.type === 'next' && (
            <div className={(currentIndex === (numberSlides - 1)) ? 'hidden' : ''}
                 style={{
                position: 'absolute',
                left: clientX,
                top: clientY,
                zIndex: 1000,
                transition: 'opacity 0.5s',
                transform: 'translate(-100%, -50%)',
                opacity: isVisible && clientX > 1 ? 1 : 0,
              }}
            >
              Next
            </div>
          )}
          {cursor.type === 'prev' && (
            <div className={(currentIndex === 0) ? 'hidden' : ''}
              style={{
                position: 'absolute',
                left: clientX,
                top: clientY,
                zIndex: 1000,
                transition: 'opacity 0.5s',
                opacity: isVisible && clientX > 1 ? 1 : 0,
                transform: 'translate(0%, -50%)',
              }}
            >
              Prev
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SliderControls;
