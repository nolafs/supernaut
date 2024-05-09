

/* eslint-disable-next-line */
import {ProfileItem} from '@supernaut/types';
import Image from 'next/image';
import {SocialList} from '@supernaut/features';

export interface ContentProfileItemProps {
  item: ProfileItem,
}

export function ContentProfileItem({item}: ContentProfileItemProps) {
  return (
    <div className={'flex flex-col space-y-6'}>
      <div>
        <Image src={item.image} alt={item.name} width={735} height={810} />
      </div>
      <div>
        <h2 className={'mb-6'}>{item.name}</h2>
        <h3 className={'mb-10'}>{item.title}</h3>
        <div className={'prose lg:prose-lg'} dangerouslySetInnerHTML={{__html: item.description}}/>
      </div>
      <div>
        <SocialList items={item.socials} icons={true}/>
      </div>
    </div>
  );
}

export default ContentProfileItem;
