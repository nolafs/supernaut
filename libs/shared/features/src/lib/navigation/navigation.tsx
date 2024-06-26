import { TNavigationItem, TSocialLinkItemType } from '@supernaut/types';
import cn from 'classnames';
import Image from 'next/image';
import NavigationButton from './navigation-button';
import NavigationMobile from './navigation-mobile/navigation-mobile';
import NavigationWrapper from './navigation-wrapper';
import styles from './navigation.module.scss';
import SocialList from '../social-list/social-list';
import ContactFormDialogButton from '../contact-form/contact-form-dialog-button';
import Link from 'next/link';


/* eslint-disable-next-line */
export interface NavigationProps {
  sys?: any;
  siteTitle?: string;
  logo?: string | undefined | null;
  items: TNavigationItem[];
  mode?: 'light' | 'dark';
  social?: TSocialLinkItemType[];
  sticky?: boolean;
  contactFormDialog?: boolean | undefined | null;
}

export function Navigation({
  sys,
  siteTitle,
  items,
  logo = '/images/logo.svg',
  sticky = true,
  mode,
  social,
  contactFormDialog = false,
}: NavigationProps) {
  //check if logo is an image or svg
  const isSvg = logo?.endsWith('.svg');

  const navigation = () => {
    return (
      <div className={cn('wrapper', styles['navbar'])} data-sb-object-id={sys.id}>
        <div className="navbar-start">
          <h1 className={'text-primary'}>
            <Link href={{
              pathname: '/',
            }}>
              <div className="sr-only">{siteTitle}</div>
              {logo && isSvg && (
                <Image data-sb-field-path="logo" src={logo} className={'logo'} alt={'logo'} width={350} height={50} />
              )}
              {logo && !isSvg && (
                <img data-sb-field-path="logo" src={logo} alt="logo" className={styles['logo']}/>
              )}
            </Link>
          </h1>
        </div>
        <div className="navbar-end flex space-x-10 items-center justify-center">
          <div className={styles['desktop']}>
            <nav>
              <ul
                className={
                  'flex justify-center font-medium space-x-12 text-lg tracking-wider uppercase items-center'
                }
              >
                {items.map((item: TNavigationItem) => {
                  return (
                    <li key={item.id}>
                      <NavigationButton item={item}/>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          {social && social.length > 0 && (
            <div className={cn(styles['desktop'], 'flex justify-center items-center')}>
              <SocialList items={social}/>
              {(contactFormDialog) && <ContactFormDialogButton label='Contact' isIcon={true} />}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (<>
      <NavigationWrapper mode={mode} sticky={sticky}>
        {navigation()}
      </NavigationWrapper>

      <NavigationMobile
        items={items}
        social={social}
        contactFormDialog={contactFormDialog}
      />
    </>
  )
    ;
}

export default Navigation;
