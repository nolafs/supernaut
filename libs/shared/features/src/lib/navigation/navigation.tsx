import styles from './navigation.module.scss';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Navigation!</h1>
    </div>
  );
}

export default Navigation;
