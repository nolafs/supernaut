import styles from './social-list.module.scss';
import { SocialLinkItemType } from '@supernaut/types';
import SocialLink from './social-link';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface SocialListProps {
  items?: SocialLinkItemType[];
  className?: string;
  icons?: boolean;
  variantButton?: number;
  variantList?: number;
}

const VARIANTS_BUTTON = [
  'w-[26px] h-[26px]',
  'border border-white p-2 h-10 w-10',
];

const VARIANTS_LIST = [
  'flex space-x-6 justify-center items-center',
  'flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10',
  'flex gap-4',
];



export function SocialList({
  items,
  className,
  icons = true,
  variantButton = 0,
  variantList = 0
}: SocialListProps) {
  if (!items?.length) return null;

  return (
    <div className={styles['container']}>
      <ul
        className={cn(
          className ? className : VARIANTS_LIST[variantList]
        )}
      >
        {items.map((item) => {
          return (
            item?.url && (
              <li key={item?.id} className={'flex'}>
                <SocialLink item={item} icons={icons} className={VARIANTS_BUTTON[variantButton]} />
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export default SocialList;
