import styles from './slider.module.css';

/* eslint-disable-next-line */
export interface SliderProps {}

export function Slider(props: SliderProps) {
  return (
    <div className={styles['container']}>
      <h1 className={'text-primary'}>Welcome to Slider!</h1>
    </div>
  );
}

export default Slider;
