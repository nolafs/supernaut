

/* eslint-disable-next-line */
import {TProfileItem} from '@supernaut/types';
import Image from 'next/image';
import SocialList from '../../../social-list/social-list';


export interface ContentProfileItemProps {
  item: TProfileItem,
}

export function ContentProfileItem({item}: ContentProfileItemProps) {
  return (
    <div className={'flex flex-col space-y-7'}>
        <Image src={item.image} alt={item.name} width={735} height={810} />
      <div>
        <h2 className={'mb-6'}>{item.name}</h2>
        <h3 className={'mb-10'}>{item.title}</h3>
        <div className={'prose prose-base lg:prose-lg'} dangerouslySetInnerHTML={{__html: item.description}}/>
      </div>
      <div>
        <SocialList items={item.socials} icons={true} variantButton={1} variantList={2}/>
      </div>
    </div>
  );
}

export default ContentProfileItem;
