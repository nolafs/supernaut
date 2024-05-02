import styles from './navigation.module.scss';
import {NavigationItem} from '@supernaut/types';



/* eslint-disable-next-line */
export interface NavigationProps {
  items?: NavigationItem[];
}

export function Navigation(props: NavigationProps) {
  return (
    <nav className={styles['container']}>
      <h1 className={'text-white'}>Welcome to Navigation!</h1>
    </nav>
  );
}

export default Navigation;
