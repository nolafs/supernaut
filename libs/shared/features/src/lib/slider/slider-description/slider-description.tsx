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
}

export function SliderDescription({
  id,
  title,
  description,
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
        'main absolute text-primary bottom-14 mx-6 md:mx-12 flex flex-col md:space-y-3 z-20 max-w-xl lg:max-w-3xl xl:max-w-6xl',
        !show ? 'opacity-0' : 'opacity-1'
      )}
    >
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
  );
}

export default SliderDescription;
