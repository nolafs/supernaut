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
  id: string;
}

export function ContentProfileItem({item, id}: ContentProfileItemProps) {


  if(!item) return <NotificationBlock body={'No profile data'} type={'error'} />;

  return (
    <ContentProfileAnim id={id} >
      <div data-sb-object-id={item.sys.id}  className={'profile-wrapper flex flex-col space-y-4 md:space-y-7'}>
        <div className={'relative overflow-hidden'} data-sb-field-path="image">
          <Image className={'profile opacity-0'} src={item.image.url} alt={item.name} width={735} height={810}/>
        </div>
        <div>
          <h2 className={'name text-primary mb-2 md:mb-3'} data-sb-field-path="name">{item.name}</h2>
          <h3 className={'title text-primary  mb-3 md:mb-4'} data-sb-field-path="title">{item.title}</h3>

          {(!item.description?.json) && <div data-sb-field-path="description" className={'prose prose-base lg:prose-lg text-secondary font-light main-text'}
                                             dangerouslySetInnerHTML={{__html: item.description}}/>}
          {(item?.description?.json) && <div data-sb-field-path="description"
                                             className={'prose prose-base lg:prose-lg text-secondary font-light main-text'}>
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
