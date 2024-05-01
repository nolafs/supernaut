
import {forwardRef} from 'react';
import Image from 'next/image';
import {Picture} from '@supernaut/shared-ui';

/* eslint-disable-next-line */
export interface SliderItemProps {
  title: string;
  description: string;
  image: string;
}

const SliderItem = forwardRef( ({title, description, image}: SliderItemProps, ref) => {
  return (
     <div className={'relative text-primary'}>
       <figure>
         <div className={'hidden md:block'}>
           <Image src={image} alt={title} width={1920} height={1000}/>
         </div>
         <div className={'block md:hidden'}>
           <Image src={image} alt={title} width={600} height={500}/>
         </div>
         <figcaption className={'absolute bottom-0 mx-12 mb-14 flex flex-col space-y-5'}>
           <h2 className={'text-[48px] font-medium tracking-tighter'}>{title}</h2>
           <p className={'text-2xl lg:text-3xl font-medium'}>{description}</p>
         </figcaption>
       </figure>
     </div>
  );
});

export default SliderItem;
