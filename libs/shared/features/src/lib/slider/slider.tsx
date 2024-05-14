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
import {TAssets} from '@supernaut/types';

type Slide = {
  title: string;
  description: string;
  image: TAssets;
  video?: TAssets;
  url?: string;
};

type Slides = {
  items: Slide[];
}

/* eslint-disable-next-line */
export interface SliderProps {
  slidesCollection?: Slides;
  strapline?: string;
  autoplay?: boolean;
}

export function Slider({slidesCollection, strapline, autoplay }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberSlides, setNumberSlides] = useState(slidesCollection?.items.length || 0);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(

    slidesCollection?.items.length ? slidesCollection.items[0] : null
  );

  console.log('slidesCollection', slidesCollection);

  if (!slidesCollection?.items.length) {
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
              setCurrentSlide(slidesCollection?.items[e.realIndex]);
            }}
            autoplay={(autoplay) ? { delay: 3000 } : false}

            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
          >
            {slidesCollection?.items.map((slide, index) => (
              <SwiperSlide key={index}>
                <SliderItem
                  title={slide.title}
                  description={slide.description}
                  image={slide?.image?.url}
                  video={slide?.video?.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={
              'absolute bottom-14 right-0 text-white text-xl md:text-4xl z-20 mr-6 md:mr-12'
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
