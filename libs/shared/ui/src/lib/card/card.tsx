'use client';
/* eslint-disable-next-line */
import cn from 'classnames';
import Image from 'next/image';
import placeholder from './placeholder.webp';
import TransitionLink from '../transition-link/transition-link';
import {contentfulLoader} from '@delicious-simplicity/next-image-contentful-loader';

export interface CardProps {
  id?: string;
  title: string | undefined | null;
  description?: string | undefined | null;
  categories?: any[];
  image?: string | undefined | null;
  url?: string | undefined | null;
  prefix?: string | undefined | null;
  wide: boolean;
  small?: boolean;
  showCategories?: boolean;
  innerRef?: (node ?: Element | null | undefined) => void
}

export function Card({id, title = 'title',categories, description, image, url, prefix, wide = false, small= false, showCategories=false,  innerRef}: CardProps) {

  const imageComp = (media: string) => {

    if(!media) return null;

    const image = (media) ? media : '/assets/placeholder.webp';

    if(wide){
      return (<div className={cn("relative card-wide overflow-hidden mb-7")}>
        <Image
               loader={(props) => contentfulLoader(props, {fit: 'fill', f: 'center', fm: 'webp'})}
               src={`${image}`}
               priority={true}
               alt={ `Image: ${title}` || 'image'}  width={1920} height={1150}
               className={'object-cover w-full h-full group-hover:scale-110  transform-gpu transition-all duration-500 ease-in-out'}/>
        {(!image) &&
          <Image src={placeholder} alt={'placeholder'} width={(1920)} height={1150}
                 className={'object-cover w-full h-full'}/>
        }
      </div>)
    } else {
      if(!small) {
        return (
          <div className={cn("relative card-normal overflow-hidden max-w-[890px] max-h-[613px] mb-4")}>
            <Image
              loader={(props) => contentfulLoader(props, {fit: 'fill', f: 'center', fm: 'webp'})}
              src={`${image}`} alt={`Image: ${title}` || ''} width={(890)} height={613}
                   className={'object-cover w-full h-full group-hover:scale-110 group-hover:brightness-125 transform-gpu transition-all duration-500 ease-in-out'}/>
            {(!image) &&
              <Image src={placeholder} alt={'placeholder'} width={(890)} height={613}
                   className={'object-cover w-full h-full'}/>
            }
          </div>)
      } else {
        return (
          <div className={cn("relative card-normal overflow-hidden  max-w-[580px] max-h-[580px] mb-4")}>
            <Image
              loader={(props) => contentfulLoader(props, {fit: 'fill', f: 'center', fm: 'webp'})}
              src={`${image}`}
              alt={`Image: ${title}` || ''} width={(580)} height={580}
                   className={'relative object-cover w-full h-full group-hover:scale-110 transform-gpu transition-all duration-500 ease-in-out'}/>

            {(!image) &&
              <Image src={placeholder} alt={'placeholder'} width={(580)} height={580}
                     className={'object-cover w-full h-full'}/>
            }

          </div>)
      }
    }
  }

  return (
    <TransitionLink href={ (prefix) ? `/${prefix}/${url}` : `/${url}` || '/'}>
      <div id={id} ref={innerRef} className={cn("group cursor-pointer relative text-primary", wide ? 'max-w-9xl' : (!small) ? 'max-w-[890px]' : 'max-w-[580px]')}>
        {(image) && imageComp(image)}
        <div className={'mix-blend-difference'}>
          <h2 className={'mb-2'}>{title}</h2>
          {(wide) ? <p className={'text-xl md:text-2xl lg:text-4xl font-normal'}>{description}</p> :
            (showCategories) ?
            <ul className={cn( (!small) ? 'text-xl md:text-2xl lg:text-4xl' : 'text-normal md:text-xl lg:text-2xl' ,' font-normal flex flex-col xl:flex-row')}>
            {categories && categories.map((category, index) => {
              return <li key={index}>{(index !== 0) && <span className={'inline-block mx-5 hidden xl:inline-block'}>/</span> }{category.name}</li>
            })}
          </ul> : null}
        </div>
      </div>
    </TransitionLink>
  );
}

export default Card;
