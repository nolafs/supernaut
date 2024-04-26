import styles from './button-primary.module.scss';
import React, {ReactNode} from 'react';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps {
  label?: string;
  isDisabled?: boolean;
  hasIcon?: boolean;
  onClick?: () => void;
}

export function ButtonPrimary({label}: ButtonPrimaryProps) {
  return (
    <button className={styles['container']}>
      {label}
    </button>
  );
}

export default ButtonPrimary;
