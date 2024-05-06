import styles from './slider-strapline.module.scss';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {SplitText} from 'gsap/SplitText';
import {useRef} from 'react';
import cn from 'classnames';

gsap.registerPlugin(useGSAP, SplitText);
/* eslint-disable-next-line */
export interface SliderStraplineProps {
  strapline: string;
}

export function SliderStrapline({strapline}: SliderStraplineProps) {

  const main = useRef<HTMLDivElement | any>();
  const split = useRef<SplitText| null>(null);

  useGSAP(() => {

    split.current = new SplitText('.strapline', {type: 'chars, words'});
    gsap.from(split.current.chars, {opacity: 0, y:"100%", duration:1, stagger: 0.05, ease: 'power3.inOut'});

  }, [strapline])


  return (
    <div  className={cn(styles['container'],'hidden md:block absolute top-0 mx-12 mt-32 z-20 text-white max-w-2xl')}>
      <h1 className={'strapline text-6xl font-medium tracking-tight uppercase overflow-hidden'}>{strapline}</h1>
    </div>
  );
}

export default SliderStrapline;
