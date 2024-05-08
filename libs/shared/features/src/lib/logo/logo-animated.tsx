import styles from './logo-animated.module.scss';
import {LazyLottie} from '@supernaut/utils'

/* eslint-disable-next-line */
export interface LogoAnimatedProps {}

export function LogoAnimated(props: LogoAnimatedProps) {


  return (
    <div className={styles['container']}>
      <LazyLottie
        getAnimationData={() => import('./supernaut-logo-anim.json')}
        loop
        id="logo"
        width={165}
      />
    </div>
  );
}

export default LogoAnimated;
