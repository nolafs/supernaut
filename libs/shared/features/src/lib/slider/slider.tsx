'use client';
import styles from './slider.module.css';
import {Swiper} from 'swiper/react';
import 'swiper/css';
import SliderItem from './slider-item/slider-item';

type Slide = {
  title: string;
  description: string;
  image: string;

}

/* eslint-disable-next-line */
export interface SliderProps {
  slides?: Slide[];
}

export function Slider(props: SliderProps) {
  return (
    <Swiper className={styles['container']}>
      <SliderItem />
    </Swiper>
  );
}

export default Slider;
