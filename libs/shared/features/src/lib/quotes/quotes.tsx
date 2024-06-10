/* eslint-disable-next-line */
'use client';
import {TQuote} from '@supernaut/types';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectCreative} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import cn from 'classnames';
import {useState} from 'react';

export type TQuoteCollection = {
  items: TQuote[];
}

export interface QuotesProps {
  sys?: any;
  mode: 'dark' | 'light';
  internalName: string;
  quotesCollection: TQuoteCollection;
  autoplay?: boolean;
  slideDuration?: number;
}

export function Quotes({
                         sys,
                         quotesCollection,
                         internalName,
                         mode = 'dark',
                         autoplay = false,
                         slideDuration = 3000,
                       }: QuotesProps) {

  const items = quotesCollection?.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberSlides, setNumberSlides] = useState(items?.length || 0);
  const [currentSlide, setCurrentSlide] = useState<TQuote | null>(
    items?.length ? items[0] : null
  );


  if (!items || !items.length) return null;

  return (
    <div data-sb-object-id={sys.id}
         className={cn(
           'relative overflow-hidden wrapper',
           mode === 'light' ? 'text-base' : 'text-primary'
         )}
    >
      <div
        className="quotes relative z-1 w-full h-auto min-h-fit overflow-hidden flex flex-col justify-center items-center py-24 sm:py-32">
        <Swiper
          loop={true}
          onSlideChange={(e) => {
            setCurrentIndex(e.realIndex);
            setCurrentSlide(items[e.realIndex]);
          }}
          effect={'creative'}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={autoplay ? {delay: slideDuration} : false}
          pagination={true}
          className={'w-full'}
          speed={1000}
          creativeEffect={{
            prev: {
              //scale: 0.1,
              //opacity: 0,
              translate: [0, '-100%', 0],
              origin: 'center',
            },
            next: {
              opacity: 0,
              translate: [0, '100%', 0],
              //scale: 0.8,
              origin: 'center',
            },
          }}
          modules={[Autoplay, EffectCreative]}
        >
          {items.map((quote, index) => (
            <SwiperSlide  id={`${internalName.replace(' ', '-').toLowerCase()}-${quote.sys.id}-${index}`}
                         key={`${quote.sys.id}-${index}`}>
              <div className="flex flex-col justify-center items-start mx-auto" data-sb-object-id={quote.sys.id}>
                <blockquote
                  className="container max-w-7xl font-medium text-3xl tracking-tight  lg:text-6xl flex flex-col">
                  <span data-sb-field-path="quote">"{quote?.quote}"</span>
                  <span className={'!outline-none mt-4'}>
                    <cite className="text-normal lg:text-3xl not-italic font-normal leading-[0]" >
                      <span data-sb-field-path="author">{quote?.author} </span>/ <span data-sb-field-path="position">{quote?.position}</span>
                    </cite>
                  </span>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Quotes;
