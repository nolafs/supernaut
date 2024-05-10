/* eslint-disable-next-line */
import cn from 'classnames';
import Image from 'next/image';

export interface CardProps {
  id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  wide: boolean;
}

export function Card({id, title,category, description, image, url, wide}: CardProps) {


  const imageComp = (media: string, url: string, wide: boolean, title: string) => {

    if(!media) return null;

    const image = (media) ? media : '/assets/placeholder.webp';

    if(wide){
      return (<div className={cn("overflow-hidden bg-gray-200 group-hover:opacity-75 mb-7")}>
        <Image src={image} alt={title}  width={1920} height={1150}  />
      </div>)
    } else {
      return (<div className={cn("overflow-hidden bg-gray-200 group-hover:opacity-75 max-w-[890px] max-h-[613px] mb-4")}>
        <Image src={image} alt={title} layout="responsive" width={(890)} height={613} />
      </div>)
    }
  }

  return (
    <div id={id} className={cn("group relative text-primary", wide ? 'max-w-9xl' : 'max-w-[890px]')}>
      { imageComp(image, url, wide, title)}
      <div>
        <h2 className={'mb-2'}>{title}</h2>
        {(wide) ? <p className={'text-xl md:text-2xl lg:text-4xl font-normal'}>{description}</p> : <p className={'text-xl md:text-2xl lg:text-4xl font-normal'}>{category}</p>}
      </div>
    </div>
  );
}

export default Card;