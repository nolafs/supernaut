import { TNavigationItem, TSocialLinkItemType } from '@supernaut/types';
import cn from 'classnames';
import Image from 'next/image';
import NavigationButton from './navigation-button';
import NavigationMobile from './navigation-mobile/navigation-mobile';
import NavigationWrapper from './navigation-wrapper';
import styles from './navigation.module.scss';
import SocialList from '../social-list/social-list';
import {Suspense} from 'react';


/* eslint-disable-next-line */
export interface NavigationProps {
  siteTitle?: string;
  logo?: string;
  items: TNavigationItem[];
  mode: 'light' | 'dark';
  social?: TSocialLinkItemType[];
  sticky?: boolean;
}

export function Navigation({
  siteTitle,
  items,
  logo = '/images/logo.svg',
  sticky = true,
  mode = 'dark',
  social,
}: NavigationProps) {
  //check if logo is an image or svg
  const isSvg = logo?.endsWith('.svg');

  const navigation = () => {
    return (
      <div className={cn(styles['navbar'])}>
        <div className="navbar-start">
          <h1 className={'text-primary'}>
            <div className="sr-only">{siteTitle}</div>
            {logo && isSvg && (
              <Image src={logo} className={styles['logo']} alt={'logo'} width={162} height={47}/>
            )}
            {logo && !isSvg && (
              <img src={logo} alt="logo" className={styles['logo']}/>
            )}
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
            <div className={styles['desktop']}>
              <SocialList items={social}/>
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
        mode={mode}
        items={items}
        siteTitle={siteTitle}
        logo={logo}
      />

    </>
  )
    ;
}

export default Navigation;
