/* eslint-disable-next-line */
import { NavigationItem, SocialLinkItemType } from '@supernaut/types';
import cn from 'classnames';
import { ButtonPrimary } from '@supernaut/shared-ui';
import { SocialList } from '../social-list/social-list';
import NavigationButton from '../navigation/navigation-button';

export interface FooterProps {
  mode: 'light' | 'dark';
  copyright: string;
  strapline: string;
  contactButtonLabel: string;
  social?: SocialLinkItemType[];
  legal: NavigationItem[];
}

export function Footer({
  mode,
  legal,
  contactButtonLabel,
  copyright,
  strapline,
  social,
}: FooterProps) {
  return (
    <footer>
      <div className={'max-w-9xl mx-auto px-8 lg:px-12 pt-16 mb:pt-24 pb-10'}>
        <div
          className={cn(
            'flex flex-col',
            mode === 'light' ? 'text-base' : 'text-primary'
          )}
        >
          <div className={'mb-8'}>
            <h1 className={'font-normal text-4xl  md:text-6xl'}>{strapline}</h1>
          </div>
          <div
            className={
              'flex flex-col md:flex-row space-y-10 md:space-y-0  md:space-x-10'
            }
          >
            <ButtonPrimary
              label={contactButtonLabel}
              isDisabled={false}
              size={'lg'}
            />
            <SocialList
              items={social}
              icons={false}
              className={
                'flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10'
              }
            />
          </div>
        </div>
        <div
          className={cn(
            'flex flex-col md:flex-row md:justify-between md:space-x-10 mt-20 md:mt-24',
            'text-secondary'
          )}
        >
          <div className={'text-sm md:text-normal'}>{copyright}</div>
          <div>
            <ul className={cn('flex space-x-6 mt-5 md:mt-0  items-center')}>
              {legal.map((item) => {
                return (
                  <li key={item.id} className={'flex'}>
                    <NavigationButton item={item} className={'underline'} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
