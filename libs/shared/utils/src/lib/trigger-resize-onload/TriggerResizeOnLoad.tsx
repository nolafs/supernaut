'use client';
import {useEffect} from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


export const  TriggerResizeOnLoad = () => {
  useEffect(() => {
    setTimeout(() => {
      console.log('trigger resize');
      window.dispatchEvent(new Event('resize'));
      ScrollTrigger.refresh();
    }, 10000);
  }, []);

  return null; // This component does not render anything
};

export default TriggerResizeOnLoad;
