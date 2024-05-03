import styles from './navigation.module.scss';
import {NavigationItem, SocialLinkItemType} from '@supernaut/types';
import Link from 'next/link';
import SocialList from '../social-list/social-list';
import cn from 'classnames';
import {ReactSVG} from 'react-svg'


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
    <nav className={cn(styles['navbar'], styles[mode])}>
      <div className="navbar-start">
        <h1 className={'text-white'}>
          <div className="sr-only">
            {siteTitle}
          </div>
          {(logo && isSvg) && <ReactSVG src={logo} className={'logo'}/>}
          {(logo && !isSvg) && <img src={logo} alt='logo' className={'logo'}/>}
        </h1>
      </div>
      <div className="navbar-end flex space-x-10 items-center justify-center">
        <div>
          <ul className={'flex justify-center space-x-12 text-lg tracking-wider uppercase items-center'}>
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
