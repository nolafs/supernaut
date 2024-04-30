import styles from './button-primary.module.scss';
import cn from 'classnames';
import Label from '../label/label';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps {
  label?: string;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hasIcon?: boolean;
  onClick?: () => void;
}

export function ButtonPrimary({label, size, isDisabled = true, hasIcon = false, onClick}: ButtonPrimaryProps) {
  return (
    <button onClick={onClick} className={cn('font-medium',

      styles.container)} disabled={isDisabled}>
      <Label size={size} hasIcon={hasIcon} isDisabled={isDisabled}>{label}</Label>
    </button>
  );
}

export default ButtonPrimary;
