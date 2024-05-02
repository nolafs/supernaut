
import {forwardRef} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';


/* eslint-disable-next-line */
export interface SliderItemProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

const SliderItem = forwardRef( ({title, description, image, url}: SliderItemProps, ref) => {

  const router = useRouter();

  const handleClick = () => {
    //next router
    if(url) {
      router.push(url)
    }
  };

  return (
     <div className={'relative  text-primary'} onClick={handleClick}>
       <figure>
         <div className={'hidden md:block w-full h-screen max-h-[1000px]'}>
           <Image src={image} alt={title} width={1920} height={1000} className={'object-cover object-center w-full h-full'}/>
         </div>
         <div className={'block md:hidden  w-full h-screen max-h-[400px]'}>
           <Image src={image} alt={title} width={390} height={400} className={'object-cover object-center  w-full h-full'}/>
         </div>
         <figcaption className={'absolute bottom-0 mx-6 md:mx-12 mb-6 md:mb-14 flex flex-col md:space-y-7'}>
           <h2 className={'text-3xl md:text-[48px] font-medium tracking-tighter'}>{title}</h2>
           <p className={'text-2xl lg:text-3xl font-medium hidden md:block'}>{description}</p>
         </figcaption>
       </figure>
     </div>
  );
});

export default SliderItem;
