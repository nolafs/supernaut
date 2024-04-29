import styles from './button-primary.module.scss';
import cn from 'classnames';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps {
  label?: string;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hasIcon?: boolean;
  onClick?: () => void;
}

export function ButtonPrimary({label}: ButtonPrimaryProps) {
  return (
    <button className={cn('text-xl lg:text-2xl font-medium text-white', styles)}>
      <div>{label}</div>
      <div className="bg-white max-w-xs h-[2px]"></div>
    </button>
  );
}

export default ButtonPrimary;
