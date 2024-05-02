'use client';
import {Controller} from 'swiper/modules';
import {Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
import SliderItem from './slider-item/slider-item';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useState} from 'react';
import SliderControls from './slider-controls/slider-controls';

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberSlides, setNumberSlides] = useState(slides?.length || 0);

  if(!slides) {
    return;
  }

  return (
    <SliderControls>
      <div className={'relative container mx-auto p-0 m-0'}>
        { strapline &&
          <div className={'hidden md:block absolute top-0 mx-14 mt-32 z-20 text-white max-w-2xl'}>
            <h1 className={'text-6xl font-medium tracking-tight uppercase'}>{strapline}</h1>
          </div>
        }
      <Swiper
        onSlideChange={(e) => {
          console.log('slide change', e);
          setCurrentIndex(e.activeIndex);
        }}
        spaceBetween={50}
        slidesPerView={1}
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
        <div className={'absolute bottom-0 right-0 text-white text-xl md:text-4xl z-20 mr-6 md:mr-12 mb-6 md:mb-14'}>
          {((currentIndex + 1) >= 10 ) ? currentIndex + 1 : `0${currentIndex + 1}`}/{(numberSlides >= 10 ) ? numberSlides : `0${numberSlides}`}
        </div>
      </div>
    </SliderControls>
  );
}

export default Slider;
