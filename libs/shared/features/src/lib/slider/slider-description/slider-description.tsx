import {useEffect, useRef} from 'react';
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

  console.log('id', id)


  useGSAP(() => {

    const split = new SplitText('.header', {type: 'chars'})

   gsap.from([split.chars, '.body' ], {opacity: 0, y:"100%", duration:0.5, stagger: 0.05, ease: 'power3.inOut'});
  }, {dependencies: [id, title], scope: main})



  return (
    <div ref={main} className={'absolute text-primary bottom-0 mx-6 md:mx-12 mb-6 md:mb-14 flex flex-col md:space-y-7 z-20'}>
      <h2 className={'header text-3xl md:text-[48px] font-medium tracking-tighter overflow-hidden'}>{title}</h2>
      <p className={'body text-2xl lg:text-3xl font-medium hidden md:block'}>{description}</p>
    </div>
  );
}

export default SliderDescription;
