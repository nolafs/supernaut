import styles from './button-primary.module.scss';
import cn from 'classnames';
import Label from '../label/label';
import {classNames} from '@headlessui/react/dist/utils/class-names';

/* eslint-disable-next-line */
export interface ButtonPrimaryProps {
  label?: string;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  hasIcon?: boolean;
  onClick?: () => void;
  classNames?: string;
}

export function ButtonPrimary({
  label,
  size,
  isDisabled = true,
  hasIcon = false,
  onClick,
  classNames
}: ButtonPrimaryProps) {
  return (
    <button
      onClick={onClick}
      className={cn('font-medium cursor-pointer', styles.container, classNames)}
      disabled={isDisabled}
    >
      <Label size={size} hasIcon={hasIcon} isDisabled={isDisabled}>
        {label}
      </Label>
    </button>
  );
}

export default ButtonPrimary;
