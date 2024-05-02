'use client';
import {ReactNode, useEffect, useRef, useState} from 'react';
import {useMousePosition, useIsTouchDevice} from '@supernaut/hooks';
import {useCursor} from '@supernaut/context';



/* eslint-disable-next-line */
export interface SliderControlsProps {
  children: ReactNode;
}

export function SliderControls({children}: SliderControlsProps) {

  const {clientX, clientY} = useMousePosition();
  const {cursor, setCursor} = useCursor();
  const {touch} = useIsTouchDevice();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(!ref.current) {
      return;
    }

    if(touch) {
      setCursor({active: false, type: 'default'});
      setIsVisible(false)
      return;
    }

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    ref.current.addEventListener("mouseenter", handleMouseEnter);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ref.current?.removeEventListener("mouseenter", handleMouseEnter);
      ref.current?.removeEventListener("mouseleave", handleMouseLeave);
    }
    }, [cursor]);

  const handleCursor = (type: string) => {
    setCursor({...cursor, active: true, type: type});
  }

  return (<>
    <div ref={ref} className={'relative container max-w-[1920px] mx-auto p-0 m-0'}>
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
    </div>
      {(cursor.active) &&
        <div className={'pointer-events-none text-primary text-6xl hidden  lg:block'}>
          {(cursor.type === 'default') &&
            <div style={{
              position: "absolute",
              left: clientX,
              top: clientY,
              zIndex: 1000,
              transform: "translate(-75%, -30px)",
              opacity: isVisible && clientX > 1 ? 1 : 0,
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
              opacity: isVisible && clientX > 1 ? 1 : 0,
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
              opacity: isVisible && clientX > 1 ? 1 : 0,
              transform: "translate(-50%, -50%)",
            }}>
              Prev
            </div>
          }
        </div>
      }

    </>
  );
}

export default SliderControls;
