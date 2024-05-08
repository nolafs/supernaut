'use client';
import styles from './logo-animated.module.scss';
import {Player} from '@lottiefiles/react-lottie-player';

/* eslint-disable-next-line */
export interface LogoAnimatedProps {}

export function LogoAnimated(props: LogoAnimatedProps) {


  return (
    <div className={styles['container']}>
      <Player
        keepLastFrame
        autoplay
        src={'/animations/supernaut-logo-anim.json'}/>
    </div>
  );
}

export default LogoAnimated;
