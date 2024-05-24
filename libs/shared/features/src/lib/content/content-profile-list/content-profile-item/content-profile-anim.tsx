'use client'
/* eslint-disable-next-line */

import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ReactNode, useRef} from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';


gsap.registerPlugin(ScrollTrigger, SplitText);

export interface ContentProfileAnimProps {
  children: ReactNode;
  id: string;
}

export function ContentProfileAnim({children, id}: ContentProfileAnimProps) {

  const container = useRef<HTMLDivElement>(null);


  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        //markers: true,
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.set('.profile', {opacity: 0, y: 0, scale: 1})
    tl.fromTo('.profile', {y:100, scale: 1.05, opacity: 0}, {y:0, stagger:0.2, scale:1, opacity: 1, duration: 1})
    tl.fromTo(['.name', '.title'], {opacity: 0, y: 100}, {opacity: 1, y: 0, stagger: 0.3, duration: 1})
    tl.fromTo('.main-text', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.5}, '-=0.5')
    tl.fromTo('.social', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.5}, '-=0.5')


  }, {scope: container});

  return (
    <div id={id} ref={container}>
      {children}
    </div>
  );
}

export default ContentProfileAnim;
