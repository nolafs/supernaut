import styles from './button-primary.module.scss';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps {}

export function ButtonPrimary(props: ButtonPrimaryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ButtonPrimary!</h1>
    </div>
  );
}

export default ButtonPrimary;
