'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import SliderItem from './slider-item/slider-item';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Slide = {
  title: string;
  description: string;
  image: string;

}

/* eslint-disable-next-line */
export interface SliderProps {
  slides?: Slide[];
}

export function Slider({slides}: SliderProps) {

  if(!slides) {
    return;
  }

  return (<div className={'container mx-auto'}>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }}
      hashNavigation={{
        watchState: true,
      }}
    >
      { slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <SliderItem title={slide.title} description={slide.description} image={slide.image}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}

export default Slider;
