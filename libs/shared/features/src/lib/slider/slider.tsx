'use client';
import { Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderItem from './slider-item/slider-item';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import SliderControls from './slider-controls/slider-controls';
import {BlockAnimateOnScroll, CursorContextProvider} from '@supernaut/context';
import SliderDescription from './slider-description/slider-description';
import SliderStrapline from './slider-strapline/slider-strapline';

import {TAssets} from '@supernaut/types';

type Slide = {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  image: TAssets;
  video?: TAssets;
  url?: string;
  work?: Work;
};

export type Work = {
  featureImage?: {url: string};
  internalName?: string;
  pageName?: string;
  slug?: string;
  subtitle?: string;
  title?: string;
}

type Slides = {
  items: Slide[];
}

/* eslint-disable-next-line */
export interface SliderProps {
  slidesCollection?: Slides;
  strapline?: string;
  autoplay?: boolean;
  slideDuration?: number;
}

export function Slider({slidesCollection, strapline, autoplay, slideDuration=3000 }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberSlides, setNumberSlides] = useState(slidesCollection?.items.length || 0);
  const [currentSlide, setCurrentSlide] = useState<Slide | null>(

    slidesCollection?.items.length ? slidesCollection.items[0] : null
  );

  if (!slidesCollection?.items.length) {
    return;
  }

  return (

    <CursorContextProvider>
      <SliderControls currentIndex={currentIndex} numberSlides={numberSlides}>

          {strapline && <SliderStrapline strapline={strapline} />}
          <Swiper
            modules={[Navigation, Autoplay, EffectCreative]}
            onSlideChange={(e) => {
              console.log(e.realIndex)
              setCurrentIndex(e.realIndex);
              setCurrentSlide(slidesCollection?.items[e.realIndex]);
            }}
            autoplay={(autoplay) ? { delay: slideDuration, disableOnInteraction: true } : false}

            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}


            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
          >
            {slidesCollection?.items.map((slide, index) => (

                <SwiperSlide id={`${slide.sys.id}-${index}`} key={`${slide.sys.id}-${index}`}>
                  <SliderItem
                    title={slide.title}
                    description={slide.description}
                    image={slide?.image?.url}
                    video={slide?.video}
                    work={slide.work}
                    url={slide.url}
                    active={currentIndex === index}
                  />
                </SwiperSlide>

            ))}
          </Swiper>
          <div
            className={
              'absolute bottom-14 right-0 text-primary text-xl md:text-2xl z-20 mr-6 md:mr-12'
            }
          >
            {currentIndex + 1 >= 10 ? currentIndex + 1 : `0${currentIndex + 1}`}
            /{numberSlides >= 10 ? numberSlides : `0${numberSlides}`}
          </div>

          <SliderDescription
            id={currentIndex}
            title={currentSlide?.title || currentSlide?.work?.title}
            description={currentSlide?.description || currentSlide?.work?.subtitle}
          />

      </SliderControls>
    </CursorContextProvider>

  );
}

export default Slider;
