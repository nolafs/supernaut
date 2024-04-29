import styles from './button-primary.module.scss';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps {
  label?: string;
  isDisabled?: boolean;
  hasIcon?: boolean;
  onClick?: () => void;
}

export function ButtonPrimary({label}: ButtonPrimaryProps) {
  return (
    <button className={cn('w-full font-bold text-4xl bg-white', styles)}>
      {label}
    </button>
  );
}

export default ButtonPrimary;
