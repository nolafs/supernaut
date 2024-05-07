'use client';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './slider-item/slider-item';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import SliderControls from './slider-controls/slider-controls';
import { CursorContextProvider } from '@supernaut/context';
import SliderDescription from './slider-description/slider-description';
import SliderStrapline from './slider-strapline/slider-strapline';

type Slide = {
  title: string;
  description: string;
  image: string;
  video?: string;
};

/* eslint-disable-next-line */
export interface SliderProps {
  slides?: Slide[];
  strapline?: string;
  autoplay?: boolean;
}

export function Slider({ slides, strapline, autoplay }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberSlides, setNumberSlides] = useState(slides?.length || 0);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(
    slides?.length ? slides[0] : null
  );

  if (!slides) {
    return;
  }

  return (
    <CursorContextProvider>
      <SliderControls>
        <div
          className={
            'relative container max-w-[1920px] mx-auto p-0 m-0 overflow-hidden'
          }
        >
          {strapline && <SliderStrapline strapline={strapline} />}
          <Swiper
            modules={[Navigation, Autoplay]}
            onSlideChange={(e) => {
              setCurrentIndex(e.realIndex);
              setCurrentSlide(slides[e.realIndex]);
            }}
            autoplay={autoplay}
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
          >
            {slides?.map((slide, index) => (
              <SwiperSlide key={index}>
                <SliderItem
                  title={slide.title}
                  description={slide.description}
                  image={slide?.image}
                  video={slide?.video}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={
              'absolute bottom-0 right-0 text-white text-xl md:text-4xl z-20 mr-6 md:mr-12 mb-6 md:mb-14'
            }
          >
            {currentIndex + 1 >= 10 ? currentIndex + 1 : `0${currentIndex + 1}`}
            /{numberSlides >= 10 ? numberSlides : `0${numberSlides}`}
          </div>

          <SliderDescription
            id={currentIndex}
            title={currentSlide?.title}
            description={currentSlide?.description}
          />
        </div>
      </SliderControls>
    </CursorContextProvider>
  );
}

export default Slider;
