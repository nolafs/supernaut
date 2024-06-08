import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(useGSAP, SplitText);

/* eslint-disable-next-line */
export interface SliderDescriptionProps {
  id?: number;
  title?: string;
  description?: string;
  currentIndex: number;
  numberSlides: number;
}

export function SliderDescription({
  id,
  title,
  description,
  currentIndex,
  numberSlides,
}: SliderDescriptionProps) {
  const main = useRef<HTMLDivElement | any>();
  const split = useRef<SplitText | null>(null);
  const tl = useRef(gsap.timeline());
  const [show, setShow] = useState(false);

  useGSAP(
    () => {
        const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(min-width: 772px)',
          isMobile: '(max-width: 771px)'
        },
        (context) => {

          const {isMobile} = context.conditions as {
            isDesktop: boolean
            isMobile: boolean
          }


          setTimeout(() => {
            tl.current = gsap.timeline();
            split.current = new SplitText('.header', {type: 'chars, lines, words'});

            setShow((prevState) => true);

            tl.current.from(split.current.chars, {
              opacity: 0,
              y: '100%',
              duration: 0.4,
              stagger: 0.05,
              ease: 'power3.inOut',
            });

            !isMobile &&
            tl.current.fromTo('.body', {
              opacity: 0,
              y: '100%',

            }, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power3.inOut'
            }, '-=0.2');
          }, 200);
        })

    },
    { dependencies: [title, description], scope: main, revertOnUpdate: false }
  );

  useEffect(() => {
    setShow((prevState) => false);
  }, [title]);


  return (
    <div
      ref={main}
      className={cn(
        'absolute w-full text-primary bottom-14 z-10',
        !show ? 'opacity-0' : 'opacity-1'
      )}
    >
      <div className={'relative w-full max-w-[1920px] mx-auto'}>
        <div
          className={
            'absolute bottom-14 right-0 text-primary text-xl md:text-2xl z-20 mr-6 md:mr-12'
          }
        >
          {currentIndex + 1 >= 10 ? currentIndex + 1 : `0${currentIndex + 1}`}
          /{numberSlides >= 10 ? numberSlides : `0${numberSlides}`}
        </div>
        <div className={'mx-6 md:mx-12 flex flex-col md:space-y-3 z-20 max-w-xl lg:max-w-3xl xl:max-w-6xl'}>
          <h2
            className={
              'header text-3xl leading-tight md:text-[48px] font-medium tracking-tighter splitTextOverflow'
            }
          >
            {title}
          </h2>
          <p className={'body text-2xl lg:text-3xl font-medium hidden md:block'}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderDescription;
