/* eslint-disable-next-line */
'use client';
import {Quote} from '@supernaut/types';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import cn from 'classnames';
import {useState} from 'react';

export interface QuotesProps {
  mode: 'dark' | 'light';
  internalName: string;
  items: Quote[]
}

export function Quotes({items, internalName, mode = 'dark'}: QuotesProps) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberSlides, setNumberSlides] = useState(items?.length || 0);
  const [currentSlide, setCurrentSlide] = useState<Quote | null>(items?.length ? items[0] : null);


  if(!items || !items.length) return null;

  return (
    <section id={'quote' + internalName} className={cn('relative overflow-hidden', (mode === 'light') ? 'text-base' : 'text-primary')}>

      <div
        className="quotes relative z-1 w-full h-auto min-h-fit overflow-hidden flex flex-col justify-center items-center py-24 sm:py-32 px-5">
        <Swiper
          loop={true}
          onSlideChange={(e) => {
            console.log(e, items[e.realIndex])
            setCurrentIndex(e.realIndex);
            setCurrentSlide(items[e.realIndex]);
          }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={true}
          pagination={true}
          className={'w-full'}
          speed={1000}
          modules={[Autoplay]}
        >
          {items.map((quote) => (
            <SwiperSlide key={quote?.id}>
              <div className="flex flex-col justify-center items-start max-w-7xl mx-auto">
                <blockquote className="font-medium text-xl tracking-tight md:text-3xl lg:text-6xl">
                  "{quote?.quote}"
                  <div className={'!outline-none'}>
                    <cite className="mt-10 mb-10 lg:text-2xl not-italic font-normal">
                      {quote?.author} / {quote?.position}
                    </cite>
                  </div>
                </blockquote>

              </div>
            </SwiperSlide>
          ))}
          <div className={'absolute bottom-0 right-0 text-white text-xl md:text-2xl z-20'}>
            {((currentIndex + 1) >= 10) ? currentIndex + 1 : `0${currentIndex + 1}`}/{(numberSlides >= 10) ? numberSlides : `0${numberSlides}`}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Quotes;
