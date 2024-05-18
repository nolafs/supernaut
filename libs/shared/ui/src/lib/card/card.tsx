/* eslint-disable-next-line */
import cn from 'classnames';
import Image from 'next/image';
import placeholder from './placeholder.webp';
import Link from 'next/link';

export interface CardProps {
  id?: string;
  title: string | undefined | null;
  description?: string | undefined | null;
  categories?: any[];
  image?: string | undefined | null;
  url?: string | undefined | null;
  prefix?: string | undefined | null;
  wide: boolean;
  innerRef?: (node ?: Element | null | undefined) => void
}

export function Card({id, title = 'title',categories, description, image, url, prefix, wide = false, innerRef}: CardProps) {

  const imageComp = (media: string) => {

    if(!media) return null;

    const image = (media) ? media : '/assets/placeholder.webp';

    if(wide){
      return (<div className={cn("relative overflow-hidden bg-gray-200 group-hover:opacity-75 mb-7")}>
        <Image src={image} alt={title || ''}  width={1920} height={1150}
               className={'absolute z-1 object-cover w-full h-full group-hover:scale-110 transform-gpu transition-all duration-500 ease-in-out'}/>
        <Image src={placeholder} alt={'placeholder'} width={(1920)} height={1150}
               className={'object-cover w-full h-full'}/>
      </div>)
    } else {
      return (<div className={cn("relative overflow-hidden bg-gray-200 group-hover:opacity-75 max-w-[890px] max-h-[613px] mb-4")}>
        <Image src={image} alt={title || ''}  width={(890)} height={613} className={'absolute z-1 object-cover w-full h-full group-hover:scale-110 transform-gpu transition-all duration-500 ease-in-out'} />
        <Image src={placeholder} alt={'placeholder'} width={(890)} height={613} className={'object-cover w-full h-full'} />
      </div>)
    }
  }

  return (
    <Link href={{
      pathname: (prefix) ? `/${prefix}/${url}` : `/${url}` || '/',
    }}>
      <div id={id} ref={innerRef} className={cn("group cursor-pointer relative text-primary", wide ? 'max-w-9xl' : 'max-w-[890px]')}>
        {(image) && imageComp(image)}
        <div>
          <h2 className={'mb-2'}>{title}</h2>
          {(wide) ? <p className={'text-xl md:text-2xl lg:text-4xl font-normal'}>{description}</p> : <ul className={'text-xl md:text-2xl lg:text-4xl font-normal flex flex-row space-x-5'}>
            {categories && categories.map((category, index) => {
              return <li key={index}>{category.name}</li>
            })}
          </ul>}
        </div>
      </div>
    </Link>
  );
}

export default Card;
