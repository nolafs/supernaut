/* eslint-disable-next-line */
import { TNavigationItem, TSocialLinkItemType } from '@supernaut/types';
import cn from 'classnames';
import { SocialList } from '../social-list/social-list';
import NavigationButton from '../navigation/navigation-button';
import ContactFormDialogButton from '../contact-form/contact-form-dialog-button';
import {LinkPrimary} from '@supernaut/shared-ui';


export interface FooterProps {
  copyright?: string | undefined | null;
  strapline?: string | undefined | null;
  contactButtonLabel?: string | undefined | null;
  contactDialog?: boolean | undefined | null;
  social?: TSocialLinkItemType[];
  legal?: TNavigationItem[];
  navigation?: TNavigationItem[];
}

export function Footer({
  legal,
  contactDialog,
  contactButtonLabel,
  copyright,
  strapline,
  social,
  navigation
}: FooterProps) {

  const copyRight = new Date().getFullYear();

  return (
    <footer>
      <div className={cn('max-w-9xl mx-auto px-5 md:px-10 pt-16 mb:pt-24 pb-10 text-primary difference')}>
        <div className={'flex flex-col'}>
          <div className={'mb-8'}>
            <h1 className={'font-normal text-4xl  md:text-6xl'}>{strapline}</h1>
          </div>
          <div
            className={
              'flex flex-col md:flex-row space-y-10 md:space-y-0  md:space-x-10'
            }
          >
            {(contactButtonLabel && contactButtonLabel.length > 0 && contactDialog) && (
            <ContactFormDialogButton label={contactButtonLabel} />) }

            {(navigation && navigation.length > 0) && (
              <ul className={cn('flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10')}>
                {navigation?.map((item) => {
                  return (
                    <li key={item.id} className={'flex'}>
                      <LinkPrimary size={'lg'} url={ item?.url ? item?.url : `/${item.slug}`}>{item.pageName}</LinkPrimary>
                    </li>
                  );
                })}
              </ul>
            )}

            <SocialList
              items={social}
              icons={false}
              variantList={1}
              variantButton={2}
            />

          </div>
        </div>
        <div
          className={cn(
            'flex flex-col md:flex-row md:justify-between md:space-x-10 mt-20 md:mt-24',
            'text-secondary'
          )}
        >
          <div className={'text-sm md:text-normal'}>&copy; {copyRight} {copyright}</div>
          <div>
            <ul className={cn('flex space-x-6 mt-5 md:mt-0  items-center')}>
              {legal?.map((item) => {
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
