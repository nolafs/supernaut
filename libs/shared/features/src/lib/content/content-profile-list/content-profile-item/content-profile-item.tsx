

/* eslint-disable-next-line */
import {TProfileItem} from '@supernaut/types';
import Image from 'next/image';
import SocialList from '../../../social-list/social-list';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';


export interface ContentProfileItemProps {
  item: TProfileItem,
}

export function ContentProfileItem({item}: ContentProfileItemProps) {
  return (
    <div className={'flex flex-col space-y-4 md:space-y-7'}>
        <Image src={item.image.url} alt={item.name} width={735} height={810} />
      <div>
        <h2 className={'mb-2 md:mb-3'}>{item.name}</h2>
        <h3 className={'mb-3 md:mb-4'}>{item.title}</h3>

        {(!item.description?.json) && <div className={'prose prose-base lg:prose-lg text-secondary'}
                                           dangerouslySetInnerHTML={{__html: item.description}}/>}
        {(item?.description?.json) && <div className={'prose prose-base lg:prose-lg text-secondary'}>
          {documentToReactComponents(item?.description?.json)}
        </div>}
      </div>
      <div>
        <SocialList items={item.socialCollection.items} icons={true} variantButton={1} variantList={2}/>
      </div>
    </div>
  );
}

export default ContentProfileItem;
