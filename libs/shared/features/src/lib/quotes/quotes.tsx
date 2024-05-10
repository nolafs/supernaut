/* eslint-disable-next-line */
'use client';
import { TQuote } from '@supernaut/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import cn from 'classnames';
import { useState } from 'react';

export interface QuotesProps {
  mode: 'dark' | 'light';
  internalName: string;
  items: TQuote[];
  autoplay?: boolean;
}

export function Quotes({
  items,
  internalName,
  mode = 'dark',
  autoplay = false,
}: QuotesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberSlides, setNumberSlides] = useState(items?.length || 0);
  const [currentSlide, setCurrentSlide] = useState<TQuote | null>(
    items?.length ? items[0] : null
  );

  if (!items || !items.length) return null;

  return (
    <section
      id={'quote' + internalName}
      className={cn(
        'relative overflow-hidden',
        mode === 'light' ? 'text-base' : 'text-primary'
      )}
    >
      <div className="quotes relative z-1 w-full h-auto min-h-fit overflow-hidden flex flex-col justify-center items-center py-24 sm:py-32">
        <Swiper
          loop={true}
          onSlideChange={(e) => {
            setCurrentIndex(e.realIndex);
            setCurrentSlide(items[e.realIndex]);
          }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={autoplay}
          pagination={true}
          className={'w-full'}
          speed={1000}
          modules={[Autoplay]}
        >
          {items.map((quote) => (
            <SwiperSlide key={quote?.id}>
              <div className="flex flex-col justify-center items-start mx-auto">
                <blockquote className="container font-medium text-3xl tracking-tight  lg:text-6xl flex flex-col">
                  <div>"{quote?.quote}"</div>
                  <div className={'!outline-none mt-4'}>
                    <cite className="text-normal lg:text-3xl not-italic font-normal leading-[0]">
                      {quote?.author} / {quote?.position}
                    </cite>
                  </div>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
          <div
            className={
              'absolute bottom-0 left-0 w-full text-white text-xl md:text-2xl  z-20'
            }
          >
            <div
              className={'container mx-auto flex justify-end items-center pb-1'}
            >
              {currentIndex + 1 >= 10
                ? currentIndex + 1
                : `0${currentIndex + 1}`}
              /{numberSlides >= 10 ? numberSlides : `0${numberSlides}`}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Quotes;
