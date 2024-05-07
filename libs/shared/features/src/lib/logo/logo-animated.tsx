import styles from './logo-animated.module.scss';
import Lottie from 'react-lottie';
import animationData from './supernaut-logo-anim.json';

/* eslint-disable-next-line */
export interface LogoAnimatedProps {}

export function LogoAnimated(props: LogoAnimatedProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles['container']}>
      <Lottie options={defaultOptions} width={165} />
    </div>
  );
}

export default LogoAnimated;
