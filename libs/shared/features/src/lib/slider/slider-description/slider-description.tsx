import {useEffect, useRef, useState} from 'react';

import cn from 'classnames';

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {SplitText} from 'gsap/SplitText';
gsap.registerPlugin(useGSAP, SplitText);

/* eslint-disable-next-line */
export interface SliderDescriptionProps {
  id?: number;
  title?: string;
  description?: string;
}

export function SliderDescription({id, title, description}: SliderDescriptionProps) {

  const main = useRef<HTMLDivElement | any>();
  const split = useRef<SplitText| null>(null);
  const tl = useRef(gsap.timeline());
  const [show, setShow] = useState(false)


  useGSAP(() => {
      setTimeout(() => {
      split.current = new SplitText('.header', {type: 'chars'})
      setShow((prevState) => true);
      tl.current.from([split.current.chars, '.body' ], {opacity: 0, y:"100%", duration:0.5, stagger: 0.05, ease: 'power3.inOut'});
    }, 100)
  }, {dependencies: [id,title], scope: main, revertOnUpdate: false})

  useEffect(() => {
    setShow((prevState) => false);
  }, [title])


  return (
    <div ref={main} className={cn('main absolute text-primary bottom-0 mx-6 md:mx-12 mb-6 md:mb-14 flex flex-col md:space-y-7 z-20 ', (!show) ? 'opacity-0' : 'opacity-1')}>
      <h2 className={'header text-3xl md:text-[48px] font-medium tracking-tighter overflow-hidden py-1'}>{title}</h2>
      <p className={'body text-2xl lg:text-3xl font-medium hidden md:block'}>{description}</p>
    </div>
  );
}

export default SliderDescription;
