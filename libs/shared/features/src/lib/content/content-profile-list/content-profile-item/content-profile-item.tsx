/* eslint-disable-next-line */
import {TProfileItem} from '@supernaut/types';
import Image from 'next/image';
import SocialList from '../../../social-list/social-list';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import dynamic from 'next/dynamic';
import ContentProfileAnim from './content-profile-anim';
const NotificationBlock = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.NotificationBlock), {ssr: false});


export interface ContentProfileItemProps {
  item: TProfileItem,
}

export function ContentProfileItem({item}: ContentProfileItemProps) {

  if(!item) return <NotificationBlock body={'No profile data'} type={'error'} />;

  return (<ContentProfileAnim>
    <div className={'flex flex-col space-y-4 md:space-y-7'}>
      <div className={'relative overflow-hidden'}>
        <Image className={'profile'} src={item.image.url} alt={item.name} width={735} height={810}/>
        <div className={'absolute cover inset-0 w-full h-full'}>
          <div className={'bar-1 absolute inset-0 h-[5%] top-[10%] bg-white'}/>
          <div className={'bar-2 absolute inset-0 h-[8%] top-[20%] bg-white'}/>
          <div className={'absolute inset-0 h-[70%] top-[30%]  bg-white'}/>
        </div>
      </div>
      <div>
        <h2 className={'name mb-2 md:mb-3'}>{item.name}</h2>
        <h3 className={'title mb-3 md:mb-4'}>{item.title}</h3>

        {(!item.description?.json) && <div className={'prose prose-base lg:prose-lg text-secondary main-text'}
                                           dangerouslySetInnerHTML={{__html: item.description}}/>}
        {(item?.description?.json) && <div className={'prose prose-base lg:prose-lg text-secondary main-text'}>
          {documentToReactComponents(item?.description?.json)}
        </div>}
      </div>
      <div className={'social'}>
        <SocialList items={item.socialCollection.items} icons={true} variantButton={1} variantList={2}/>
      </div>
    </div>
    </ContentProfileAnim>
  );
}

export default ContentProfileItem;
