/* eslint-disable-next-line */
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ReactNode, useRef, useState} from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ContentVideoAnimationProps {
  children: ReactNode;
  handlePlay: () => void;
  handlePause: () => void;
  handleReplay: () => void;
}

export function ContentVideoAnimation({children, handlePlay, handlePause, handleReplay}: ContentVideoAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useGSAP(() => {
      gsap.fromTo('.video',
        {opacity: 0, y: '100%'},
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            markers: true,
            trigger: ref.current,
            start: 'top 80%',
            end: 'bottom 30%',
          },
          onEnter: () => {
            console.log('onEnter')
            setReady(true);
            handlePlay();
          },
          onEnterBack: () => {
            console.log('onEnterBack')
            //handleReplay();
          },
          onLeave: () => {
            console.log('onLeave')
            //handlePause();
          },
          onLeaveBack: () => {
            //handlePlay();
          }
        });

  }, {scope: ref});

  return (
    <div ref={ref} className={'flex w-full max-w-9xl mx-auto'}>
      {children}
    </div>
  );
}

export default ContentVideoAnimation;
