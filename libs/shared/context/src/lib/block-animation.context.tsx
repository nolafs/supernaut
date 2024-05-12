/* eslint-disable-next-line */
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import React, {useRef, ReactNode, createContext, useContext} from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

export interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: keyof Animations;
  duration?: number;
  start?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  target?: string;
}

interface AnimationProps {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  animProps?: gsap.TweenVars;
  target?: string;
}

interface AnimationProviderProps {
  children: ReactNode;
}

const BlockAnimationContext = createContext<Animations | null>(null);

const useAnimation = () => {
  const context = useContext(BlockAnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

type Animations = {
  fadeIn: (element: Element | null, props: AnimationProps) => void;
  slideIn: (element: Element | null, props: AnimationProps) => void;
  splitText: (element: Element | null, props: AnimationProps) => void;
  staggerList: (element: Element | null, props: AnimationProps) => void;
}



export function BlockAnimationProvider({children}: AnimationProviderProps) {

  const fadeIn = (element: any, props: any) => {
    gsap.fromTo(element, {opacity: 0, ...props.from}, {opacity: 1, ...props.to, ...props.animProps});
  };

  const slideIn = (element: any, props: any) => {
    gsap.fromTo(element, {y: 100, ...props.from}, {y: 0, ...props.to, ...props.animProps});
  };

  const splitText = (element: any, props: any) => {

    const text = element.children[0];
    const split = new SplitText(text, {type: 'chars, words'});

    if(!split.chars) return;

    gsap.fromTo(split.chars, {opacity: 0, y: '100%',  ...props.from}, {opacity: 1, y: 0, stagger: 0.02, ease:'power2.inOut', ...props.to, ...props.animProps});
  };

  const staggerList = (element: any, props: any) => {
    let children = element.children;
    // get all children
    if(props?.target) {
      children = props.target;
    }

    gsap.fromTo(children, {opacity: 0, y: 100, ...props.from}, {opacity: 1, y: 0, stagger: 0.05, ...props.to, ...props.animProps});
  }


  const animations = {
    fadeIn,
    slideIn,
    splitText,
    staggerList
  };


  return (
    <BlockAnimationContext.Provider value={animations}>{children}</BlockAnimationContext.Provider>
  );
}


const BlockAnimateOnScroll: React.FC<AnimateOnScrollProps> = ({children, animation = "fadeIn", duration = 1, start = "top 80%", from = {}, to = {}, target}) => {
  const animations = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (animations[animation]) {
      animations[animation](ref.current, {
        from,
        to,
        animProps: {
          duration,
          scrollTrigger: {
            trigger: ref.current,
            start,
          }
        }
      });
    }
  }, {dependencies: [animations, animation, duration, start, from, to, target], scope: ref});

  return <div ref={ref}>{children}</div>;
};


export { BlockAnimationContext, BlockAnimateOnScroll};
