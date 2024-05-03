import styles from './navigation.module.scss';
import {NavigationItem, SocialLinkItemType} from '@supernaut/types';
import Link from 'next/link';
import SocialList from '../social-list/social-list';



/* eslint-disable-next-line */
export interface NavigationProps {
  siteTitle?: string;
  logo?: string;
  items: NavigationItem[];
  mode: 'light' | 'dark';
  social?: SocialLinkItemType[];
}

export function Navigation({siteTitle, items, logo, mode='dark', social}: NavigationProps) {
  return (
    <nav className={styles['navbar']}>
      <div className="navbar-start">
        <h1 className={'text-white'}>
          <div className="sr-only">
            {siteTitle}
          </div>
          <img src={logo} alt={siteTitle} className={'w-20 h-20'}/>
        </h1>
      </div>
      <div className="navbar-end flex space-x-5 items-center justify-center">
        <div>
          <ul className={'flex justify-center space-x-5 items-center'}>
            {items.map((item:NavigationItem) => {
              return (
                <li key={item.id}>
                  <Link href={{
                    pathname: item?.slug
                  }}>{item.pageName}</Link>
                </li>
              )})}
          </ul>
        </div>
        { (social && social.length > 0) &&
        <div>
          <SocialList items={social}  />
        </div>
        }
      </div>
    </nav>
  );
}

export default Navigation;
