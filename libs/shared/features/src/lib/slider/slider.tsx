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
  strapline?: string;
}

export function Slider({slides, strapline}: SliderProps) {

  if(!slides) {
    return;
  }

  return (<div className={'relative container mx-auto'}>
      { strapline &&
        <div className={'hidden md:block absolute top-0 mx-14 mt-32 z-20 text-white max-w-2xl'}>
          <h1 className={'text-6xl font-medium tracking-tight uppercase'}>{strapline}</h1>
        </div>
      }
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
