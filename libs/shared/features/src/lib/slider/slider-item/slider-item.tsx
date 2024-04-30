import styles from './slider-item.module.css';
import {SwiperSlide} from 'swiper/react';


/* eslint-disable-next-line */
export interface SliderItemProps {}

export function SliderItem(props: SliderItemProps) {
  return (
    <SwiperSlide className={styles['container']}>
     <div className={'text-primary'}>Slide 1</div>
    </SwiperSlide>
  );
}

export default SliderItem;
