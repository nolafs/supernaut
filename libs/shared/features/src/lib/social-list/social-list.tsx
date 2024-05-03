import styles from './social-list.module.scss';
import {SocialLinkItemType} from '@supernaut/types';
import SocialLink from './social-link';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface SocialListProps {
  items: SocialLinkItemType[];
  className?: string;
}

export function SocialList({items, className}: SocialListProps) {
  return (
    <div className={styles['container']}>
      <ul className={cn((className) ? className : 'flex space-x-6 justify-center items-center')}>
        {items.map(item => {
          return ((item?.url) &&
            <li key={item?.id} className={'flex'}>
              <SocialLink item={item}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default SocialList;
