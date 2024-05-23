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
}

export function ContentProfileAnim({children}: ContentProfileAnimProps) {

  const ref = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  const tlText = useRef<gsap.core.Timeline>();

  useGSAP(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        //markers: true,
        trigger: ref.current,
        start: 'top 80%',
      }
    });

    tl.current.set('.profile-wrapper', {opacity: 1})

    tl.current.fromTo('.profile', {y:100, scale: 1.1, opacity: 0}, {y:0, stagger:0.2, scale:1, opacity: 1, duration: 1})

    tlText.current = gsap.timeline({
      scrollTrigger: {
        //markers: true,
        trigger: ref.current,
        start: 'top 60%',
      }
    });

    tlText.current.fromTo(['.name', '.title'], {opacity: 0, y: 100}, {opacity: 1, y: 0, stagger: 0.3, duration: 1})
    tlText.current.fromTo('.main-text', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.5}, '-=0.5')
    tlText.current.fromTo('.social', {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 0.5}, '-=0.5')


  }, [{scope: ref.current}]);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

export default ContentProfileAnim;
