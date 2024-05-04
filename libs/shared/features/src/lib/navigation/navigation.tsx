import styles from './navigation.module.scss';
import {NavigationItem, SocialLinkItemType} from '@supernaut/types';
import Link from 'next/link';
import SocialList from '../social-list/social-list';
import cn from 'classnames';
import {ReactSVG} from 'react-svg'
import NavigationMobile from './navigation-mobile/navigation-mobile';
import NavigationButton from './navigation-button';


/* eslint-disable-next-line */
export interface NavigationProps {
  siteTitle?: string;
  logo?: string;
  items: NavigationItem[];
  mode: 'light' | 'dark';
  social?: SocialLinkItemType[];
}

export function Navigation({siteTitle, items, logo, mode='dark', social}: NavigationProps) {

  //check if logo is an image or svg
  const isSvg = logo?.endsWith('.svg');


  return (
    <div className={cn(styles['navbar'], styles[mode])}>
      <div className="navbar-start">
        <h1 className={'text-white'}>
          <div className="sr-only">
            {siteTitle}
          </div>

          {(logo && isSvg) && <ReactSVG src={logo} className={styles['logo']}/>}
          {(logo && !isSvg) && <img src={logo} alt='logo' className={styles['logo']}/>}

        </h1>
      </div>
      <div className="navbar-end flex space-x-10 items-center justify-center">
        <div className={styles['desktop']}>
          <nav>
            <ul className={'flex justify-center font-medium space-x-12 text-lg tracking-wider uppercase items-center'}>
            {items.map((item:NavigationItem) => {
              return (
                <li key={item.id}>
                  <NavigationButton item={item} />
                </li>
              )})}
            </ul>
          </nav>
        </div>
        { (social && social.length > 0) &&
          <div className={styles['desktop']}>
            <SocialList items={social}/>
          </div>
        }
        <div className={styles['mobile']}>
          <NavigationMobile mode={mode} items={items} siteTitle={siteTitle} logo={logo}/>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
